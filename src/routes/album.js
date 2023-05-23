const express = require("express");
const {
  getAllAlbums,
  getAlbumById,
  updateAlbum,
  modifyAlbum,
} = require("../controllers/album");

const albumRouter = express.Router();

albumRouter
  .get("/", getAllAlbums)
  .get("/:id", getAlbumById)
  .put("/:id", updateAlbum)
  .patch("/:id", modifyAlbum);

module.exports = albumRouter;
