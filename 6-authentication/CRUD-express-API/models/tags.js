const client = require("./client");

const tagExists = async (tagName) => {
  
    const {
    rows: [tag],
  } = await client.query(`
          SELECT id FROM tags WHERE tag=$1;
       `,
       [tagName]
      );

      return !!tag;
};

const createTag = async (tagName) => {
  if (!tagName) {
    return null;
  }

  const {
    rows: [newTag],
  } = await client.query(
    `
      INSERT INTO tags(tag) VALUES ($1)
      ON CONFLICT (tag) DO NOTHING
      RETURNING *;
    `,
    [tagName.toLowerCase()]
  );

  if (newTag) {
    return newTag;
  }

  const {
    rows: [existingTag],
  } = await client.query(`SELECT * FROM tags WHERE tag=$1`, [tagName]);

  return existingTag;
};

const createTags = async (tagNames) => {
  if (!tagNames || !tagNames.length) {
    return [];
  }

  const insertionTemplate = tagNames.map((_, i) => `$${i + 1}`).join("), (");

  // update a tag on conflict, so it will be included in the returned rows
  const { rows: tags } = await client.query(
    `
    INSERT INTO tags(tag)
    VAlUES(${insertionTemplate})
    ON CONFLICT (tag) DO UPDATE SET tag = EXCLUDED.tag
    RETURNING *;
  `,
    tagNames.map((t) => t.toLowerCase())
  );

  return tags;
};

const deleteTag = async (tagId) => {
  if (!tagId) {
    return false;
  }

  await client.query(`DELETE FROM link_tags WHERE $1=tag_id;`, [tagId]);
  await client.query(`DELETE FROM tags WHERE $1=id;`, [tagId]);

  return true;
};

module.exports = {
  tagExists,
  createTag,
  createTags,
  deleteTag,
};