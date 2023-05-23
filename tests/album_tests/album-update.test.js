const { expect } = require("chai");
const request = require("supertest");
const db = require("../../src/db");
const app = require("../../src/app");

describe("update album", () => {
  let album;
  beforeEach(async () => {
    const { rows } = await db.query(
      "INSERT INTO Albums (name, year) VALUES($1, $2) RETURNING *",
      ["Lonerism", "2012"]
    );

    album = rows[0];
  });

  describe("PUT /albums/{id}", () => {
    it("replaces the album record and returns the update record", async () => {
      const { status, body } = await request(app)
        .put(`/albums/${album.id}`)
        .send({ name: "different name", year: "1234" });

      expect(status).to.equal(200);
      expect(body).to.deep.equal({
        artist_id: null,
        id: album.id,
        name: "different name",
        year: 1234,
      });
    });
    it("returns a 404 if the album does not exist", async () => {
      const { status, body } = await request(app)
        .put("/albums/999999999")
        .send();

      expect(status).to.equal(404);
      expect(body.message).to.equal("album 999999999 does not exist");
    });
  });
});
