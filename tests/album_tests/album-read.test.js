const { expect } = require("chai");
const request = require("supertest");
const app = require("../../src/app");
const db = require("../../src/db/index");

describe("read albums", () => {
  let albums;
  beforeEach(async () => {
    const responses = await Promise.all([
      db.query("INSERT INTO Albums (name, year) VALUES($1, $2) RETURNING *", [
        "Lonerism",
        "2012",
      ]),
      db.query("INSERT INTO Albums (name, year) VALUES($1, $2) RETURNING *", [
        "Siamese Dream",
        "1993",
      ]),
      db.query("INSERT INTO Albums (name, year) VALUES($1, $2) RETURNING *", [
        "One Step Beyond",
        "1979",
      ]),
    ]);

    albums = responses.map(({ rows }) => rows[0]);
  });

  describe("GET /albums", () => {
    it("returns all album records in the database", async () => {
      const { status, body } = await request(app).get("/albums").send();

      expect(status).to.equal(200);
      expect(body.length).to.equal(3);

      body.forEach((albumRecord) => {
        const expected = albums.find((a) => a.id === albumRecord.id);

        expect(albumRecord).to.deep.equal(expected);
      });
    });
  });

  describe("GET /albums/{id}", () => {
    it("returns the album with the correct id", async () => {
      const { status, body } = await request(app)
        .get(`/albums/${albums[0].id}`)
        .send();

      expect(status).to.equal(200);
      expect(body).to.deep.equal(albums[0]);
    });

    it("returns a 404 if the album does not exist", async () => {
      const { status, body } = await request(app)
        .get("/albums/999999999")
        .send();

      expect(status).to.equal(404);
      expect(body.message).to.equal("album 999999999 does not exist");
    });
  });
});
