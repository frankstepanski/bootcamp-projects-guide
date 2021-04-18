const client = require("./client");

const createLinkTag = async (linkId, tagId) => {
  if (!linkId || !tagId) {
    return null;
  }

  const {
    rows: [linkTag],
  } = await client.query(
    `INSERT INTO link_tags(link_id, tag_id)
     VALUES ($1, $2) ON CONFLICT (link_id, tag_id) DO NOTHING
     RETURNING *;
    `,
    [linkId, tagId]
  );

  return linkTag;
};

const createLinkTags = async (linkId, tags) => {
  if (!linkId || !tags || !tags.length) {
    return [];
  }

  let i = 0;
  const insertionTemplate = [];

  tags.forEach((_) => {
    insertionTemplate.push(`$${++i}, $${++i}`);
  });

  const insertionValues = [];

  tags.forEach((tag) => {
    insertionValues.push(linkId);
    insertionValues.push(tag.id);
  });

  const { rows: linkTags } = await client.query(
    `INSERT INTO link_tags(link_id, tag_id)
     VALUES (${insertionTemplate.join("), (")})
     ON CONFLICT (link_id, tag_id) DO NOTHING
     RETURNING *;
     `,
    insertionValues
  );

  return linkTags;
};

const deleteUnusedLinkTags = async (linkId, tagIdsToKeep) => {

    if (!linkId || !tagIdsToKeep || !tagIdsToKeep.length) {
       return false;
    }

    const query = `
       DELETE FROM link_tags
       WHERE link_id = $1
       AND tag_id NOT IN (${tagIdsToKeep.map((id) => `'${id}'`).join(", ")});
    `;

    await client.query(query, [linkId]);

    return true;
};

const deleteLinkTag = async (linkId, tagId) => {
   
    if (!linkId || !tagId) {
     return false;
   }

   await client.query(`
      DELETE FROM link_tags
      WHERE link_id=$1 AND tag_id=$2;
      `,
      [linkId, tagId]
    );

    return true;
};

module.exports = {
  createLinkTag,
  createLinkTags,
  deleteLinkTag,
  deleteUnusedLinkTags,
};