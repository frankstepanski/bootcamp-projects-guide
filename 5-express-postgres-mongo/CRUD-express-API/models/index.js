const sync = require("./sync");

module.exports = {
  sync,
  ...require("./links"),
  ...require("./tags"),
  ...require("./link_tags"),
};