const express = require("express");
const {
  getAllAlbums,
  getAlbumById,
  updateAlbum,
  modifyAlbum,
  deleteAlbum,
} = require("../controllers/album");

const albumRouter = express.Router();

albumRouter
  .get("/", getAllAlbums)
  .get("/:id", getAlbumById)
  .put("/:id", updateAlbum)
  .patch("/:id", modifyAlbum)
  .delete("/:id", deleteAlbum);

module.exports = albumRouter;
