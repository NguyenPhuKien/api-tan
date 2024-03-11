const { errorHandler } = require("../utils");
const fs = require("fs");
const path = require("path");

const controllersPath = path.join(__dirname, "../controllers");

exports.home = async (req, res, next) => {
  const apiUrls = fs.readdirSync(controllersPath)
    .map(file => path.parse(file).name.toLowerCase())
    .reduce((acc, api) => ({ ...acc, [api]:`https://7e61215b-916c-4029-92c1-b476be1596be-00-1f31xm7z58hs2.sisko.replit.dev/${api}` }), {});

  const jsonString = `========== [ DANH SÁCH API ] =========\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n
${Object.entries(apiUrls).map(([api, url]) => `${api}:  ${url}`).join("\n\n")}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;

  res.set('Content-Type', 'application/json');
  res.send(jsonString);
};