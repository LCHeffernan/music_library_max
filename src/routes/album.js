const express = require("express");
const {
  getAllAlbums,
  getAlbumById,
  updateAlbum,
} = require("../controllers/album");

const albumRouter = express.Router();

albumRouter
  .get("/", getAllAlbums)
  .get("/:id", getAlbumById)
  .put("/:id", updateAlbum);

module.exports = albumRouter;
