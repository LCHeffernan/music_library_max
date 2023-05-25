const { expect } = require("chai");
const request = require("supertest");
const app = require("../../src/app");
const db = require("../../src/db/index");

describe("create album", () => {
  let artist;
  beforeEach(async () => {
    const { rows } = await db.query(
      "INSERT INTO Artists (name, genre) VALUES($1, $2) RETURNING *",
      ["Smashing Pumpkins", "rock"]
    );

    artist = rows[0];
  });

  describe("POST", () => {
    describe("/artists/{id}/albums", () => {
      it("creates a new album associated with an artist", async () => {
        const { status, body } = await request(app)
          .post(`/artists/${artist.id}/albums`)
          .send({
            name: "Siamese Dream",
            year: 1993,
          });

        expect(status).to.equal(201);
        expect(body.name).to.equal("Siamese Dream");
        expect(body.year).to.equal(1993);
        expect(body.artist_id).to.equal(artist.id);
      });
    });
  });
});
