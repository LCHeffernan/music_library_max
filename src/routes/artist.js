const express = require("express");
const {
  createArtist,
  getAllArtists,
  readArtistById,
  updateArtist,
  modifyArtist,
  deleteArtist,
} = require("../controllers/artist");
const { createAlbum } = require("../controllers/album");

const artistRouter = express.Router();

artistRouter
  .post("/", createArtist)
  .get("/", getAllArtists)
  .get("/:id", readArtistById)
  .put("/:id", updateArtist)
  .patch("/:id", modifyArtist)
  .delete("/:id", deleteArtist)
  .post("/:id/albums", createAlbum);

module.exports = artistRouter;
