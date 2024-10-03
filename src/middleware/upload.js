const util = require("util");
const Multer = require("multer");
// here the maximum upload size is set to 2 Megabyte
const maxSize = 2 * 1024 * 1024;

let processFile = Multer({
  storage: Multer.memoryStorage(),
  limits: { fileSize: maxSize },
}).single("file");

let processFileMiddleware = util.promisify(processFile);
module.exports = processFileMiddleware;
