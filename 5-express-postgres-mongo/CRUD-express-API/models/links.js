const client = require("./client");

const reduceLinkTagPairsToLinksWithTags = (linkTagPairs) => {

  const linksWithTags = linkTagPairs.reduce(
    (aggregator, { id, url, comment, clickCount, createdAt, tag }) => {
      if (aggregator.hasOwnProperty(id)) {
        if (tag) {
          aggregator[id].tags.push(tag);
        }
      } else {
        aggregator[id] = {
          id,
          url,
          clickCount,
          comment,
          createdAt,
          tags: tag ? [tag] : [],
        };
      }

      return aggregator;
    },
    {}
  );

  return Object.values(linksWithTags);
};

const linkExists = async (linkId, url) => {
  if (!linkId) {
    return false;
  }

  const {
    rows: [link],
  } = await client.query(`
        SELECT id FROM links WHERE id=$1 OR url=$2;
      `,
       [linkId, url]
     );

    return !!link;
};

// Goal: return an array of comments, where each comment
// has a `tags` property, that holds all of it's tags
// [{ id, link, clickCount, comment, tags: [] }]
const getAllLinksWithTags = async (linkSearchTerm) => {
  
    linkSearchTerm = linkSearchTerm && linkSearchTerm.trim();
    
    const validLinkSearchTerm = linkSearchTerm && linkSearchTerm.length ? true : false;

    let query = `SELECT l.id as id, url, comment, "clickCount", "createdAt", tag FROM links l
      LEFT JOIN link_tags lt ON l.id = lt.link_id
      LEFT JOIN tags t ON lt.tag_id = t.id
    `;

    if (validLinkSearchTerm) {
       query += ` WHERE l.url ILIKE '%'||$1||'%'`;
    }

    query += ";";

    const { rows: linkTagPairs } = await client.query(
       query,
       validLinkSearchTerm ? [linkSearchTerm] : []
    );

    return reduceLinkTagPairsToLinksWithTags(linkTagPairs);
};

const getLinksByTagName = async (tagName) => {
  
    const { rows: linkTagPairs } = await client.query(`
       SELECT l.id AS id, url, comment, "clickCount", "createdAt", tt.tag AS tag
       FROM tags t
       INNER JOIN link_tags lt ON t.id = lt.tag_id
       INNER JOIN links l ON l.id = lt.link_id
       LEFT JOIN link_tags ltt ON l.id = ltt.link_id
       LEFT JOIN tags tt ON ltt.tag_id = tt.id
       WHERE t.tag = $1;
    `,
      [tagName]
    );

     return reduceLinkTagPairsToLinksWithTags(linkTagPairs);
};

const createLink = async (url, comment) => {
  
     if (!url) {
       return null;
     }

     const {
       rows: [link],
       } = await client.query(`
           INSERT INTO links (url, comment) VALUES ($1, $2) RETURNING *;
           `,
           [url, (comment && comment.trim()) || null]
           );

     return link;
};

const deleteLink = async (linkId) => {
   
    if (!linkId) {
        return false;
    }

    await client.query(`
        DELETE FROM link_tags WHERE $1 = link_id;
        `,
        [linkId]
    );

    await client.query(`
        DELETE FROM links WHERE $1 = id;
        `,
        [linkId]
    );

    return true;
};

const updateLink = async (linkId, columnsToUpdate) => {
  
    if (!linkId) {
       return null;
    }

    const columns = [];
    const values = [];

    for (const column in columnsToUpdate) {
       if (columnsToUpdate.hasOwnProperty(column)) {
          columns.push(column);
          values.push(columnsToUpdate[column]);
       }
    }

    if (!columns.length) {
       return null;
    }

    const setTemplate = columns
      .map((column, idx) => {
        return `"${column}" = $${idx + 2}`;
      })
      .join(", ");

      const {
         rows: [updatedLink],
      } = await client.query(`
             UPDATE links SET
             ${setTemplate}
             WHERE
             id = $1
             RETURNING *;
          `,
          [linkId, ...values]
       );

       return updatedLink;
};

module.exports = {
  linkExists,
  getAllLinksWithTags,
  getLinksByTagName,
  createLink,
  deleteLink,
  updateLink,
};