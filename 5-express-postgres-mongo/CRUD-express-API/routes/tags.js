const express = require("express");
const router = express.Router();

const { tagExists, getLinksByTagName } = require("../db/index");

router.get("/:tagName/links", async (req, res, next) => {
  try {
    if (!tagExists(req.params.tagName)) {
      return res.status(404).json({
        error: `No tag of "${req.params.tagName}" exists.`,
      });
    }

    res.json(await getLinksByTagName(req.params.tagName));
  } catch (error) {
    next(error);
  }
});

module.exports = router;