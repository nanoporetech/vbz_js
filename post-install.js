const fs = require("fs");
const path = require("path");

const srcFolder = path.join(__dirname, "tests");
const destFolder = path.join(__dirname, "dist");

// Copy index file to {workspace}/dist/ folder
fs.copyFileSync(
  path.join(srcFolder, "index.html"),
  path.join(destFolder, "index.html")
);
