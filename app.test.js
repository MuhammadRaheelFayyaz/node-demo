// app.test.js
const request = require("supertest");
const app = require("./server.js");

let server;
beforeAll(() => {
  // Start the server before tests
  server = app.listen(3000);
});

afterAll(() => {
  // Close the server after tests
  server.close();
});

describe("GET /", () => {
  it("should respond with a 200 status and 'Hello World!'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
