const express = require("express");
const {} = require("../controllers/album");

const albumRouter = express.Router();

albumRouter.post("/artists/:id/albums");
