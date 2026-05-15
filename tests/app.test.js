const request = require("supertest");
const app = require("../src/app");

describe("Demo app", () => {
  test("GET /health should return ok", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  test("GET /users should return generated SQL string", async () => {
    const response = await request(app).get("/users?id=1");

    expect(response.statusCode).toBe(200);
    expect(response.body.sql).toContain("SELECT * FROM users WHERE id = 1");
  });

  test("POST /echo should return input", async () => {
    const response = await request(app)
      .post("/echo")
      .send({
        input: "hello checkmarx"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.echoed).toBe("hello checkmarx");
  });
});
