const { expect } = require("chai");
const request = require("supertest");
const db = require("../../src/db/index");
const app = require("../../src/app");

describe("delete album", () => {
  let album;
  beforeEach(async () => {
    const { rows } = await db.query(
      "INSERT INTO Albums (name, year) VALUES($1, $2) RETURNING *",
      ["Lonerism", "2012"]
    );

    album = rows[0];
  });

  describe("delete /albums/{id}", () => {
    it("deletes the album and returns the deleted data", async () => {
      const { status, body } = await request(app)
        .delete(`/albums/${album.id}`)
        .send();

      expect(status).to.equal(200);

      expect(body).to.deep.equal({
        artist_id: null,
        name: "Lonerism",
        year: 2012,
        id: album.id,
      });
    });

    it("returns a 404 if the album does not exist", async () => {
      const { status, body } = await request(app)
        .delete("/albums/999999999")
        .send();

      expect(status).to.equal(404);
      expect(body.message).to.equal("album 999999999 does not exist");
    });
  });
});
