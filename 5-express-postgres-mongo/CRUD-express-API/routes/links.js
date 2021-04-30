const express = require("express");
const router = express.Router();

const {
  linkExists,
  getAllLinksWithTags,
  createLink,
  updateLink,
  createTags,
  createLinkTags,
  deleteUnusedLinkTags,
} = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    res.json(await getAllLinksWithTags(req.query.search));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    if (!req.body.url || !req.body.url.length) {
      return res.status(400).json({
        error:
          "'url' is a required field, and it must be included in the request body.",
      });
    }

    const [link, validTags] = await Promise.all([
      createLink(req.body.url, req.body.comment),
      createTags(req.body.tags.filter((tag) => !!tag.trim().length)),
    ]);

    if (validTags.length) {
      await createLinkTags(link.id, validTags);
    }

    link.tags = validTags.map((tag) => tag.tag);

    res.status(201).json(link);
  } catch (error) {
    if ("constraint" in error && error.constraint === "links_url_key") {
      return res.status(400).json({
        error: "A link with this url already exists.",
      });
    }

    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    if (!linkExists(req.params.id)) {
      return res.status(404).json({
        error: `No link with the id ${req.params.id} exists.`,
      });
    }

    const linkColumnsToUpdate = {};
    let updateTheLink = false;

    if (typeof req.body.comment === "string") {
      updateTheLink = true;
      linkColumnsToUpdate.comment = req.body.comment.trim();
    }

    if (typeof req.body.clickCount === "number" && req.body.clickCount >= 0) {
      updateTheLink = true;
      linkColumnsToUpdate.clickCount = req.body.clickCount;
    }

    if (updateTheLink) {
      await updateLink(req.params.id, linkColumnsToUpdate);
    }

    if (Array.isArray(req.body.tags)) {
      const updatedTags = await createTags(req.body.tags);
      await Promise.all([
        createLinkTags(req.params.id, updatedTags),
        deleteUnusedLinkTags(
          req.params.id,
          updatedTags.map((t) => t.id)
        ),
      ]);
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
