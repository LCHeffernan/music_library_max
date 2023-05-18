const express = require("express");
const {
  createArtist,
  getAllArtists,
  readArtistById,
  updateArtist,
  modifyArtist,
  deleteArtist,
} = require("../controllers/artist");

const artistRouter = express.Router();

artistRouter
  .post("/", createArtist)
  .get("/", getAllArtists)
  .get("/:id", readArtistById)
  .put("/:id", updateArtist)
  .patch("/:id", modifyArtist)
  .delete("/:id", deleteArtist);

module.exports = artistRouter;
