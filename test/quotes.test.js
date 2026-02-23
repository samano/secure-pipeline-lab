const request = require("supertest");
const app = require("../src/app");

describe("GET /quote", () => {
  it("should return a quote", async () => {
    const res = await request(app).get("/quote");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("quote");
  });
});