const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");

let routes = (app) => {
  router.post("/upload", controller.upload); // to upload a file.
  router.get("/files", controller.getListFiles); // to see all the files which are uploaded.
  router.get("/files/:name", controller.download); // download a particular file.
  
  app.use(router);
};

module.exports = routes;
