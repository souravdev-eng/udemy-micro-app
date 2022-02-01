import request from "supertest";
import { app } from "../../app";

it("should return 201 after creating a user", async () => {
  await request(app)
    .post(`/api/users/signup`)
    .send({
      name: "Sourav Majumdar",
      email: "sourav.dev1@gmail.com",
      password: "123456",
      passwordConform: "123456",
    })
    .expect(201);
});

it("should return 400 if user does not provide required field value", async () => {
  await request(app)
    .post(`/api/users/signup`)
    .send({
      email: "sourav.dev1@gmail.com",
      password: "123456",
      passwordConform: "123456",
    })
    .expect(400);

  await request(app)
    .post(`/api/users/signup`)
    .send({
      name: "Sourav Majumdar",
      password: "123456",
      passwordConform: "123456",
    })
    .expect(400);

  await request(app)
    .post(`/api/users/signup`)
    .send({
      name: "Sourav Majumdar",
      email: "sourav.dev1@gmail.com",
      password: "123456",
    })
    .expect(400);

  await request(app)
    .post(`/api/users/signup`)
    .send({
      name: "Sourav Majumdar",
      email: "sourav.dev1@gmail.com",
      passwordConform: "123456",
    })
    .expect(400);
});

it("should return 400 if user provide duplicate email", async () => {
  await request(app)
    .post(`/api/users/signup`)
    .send({
      name: "Sourav Majumdar",
      email: "sourav.dev1@gmail.com",
      password: "123456",
      passwordConform: "123456",
    })
    .expect(201);

  await request(app)
    .post(`/api/users/signup`)
    .send({
      name: "Sourav Majumdar",
      email: "sourav.dev1@gmail.com",
      password: "123456",
      passwordConform: "123456",
    })
    .expect(400);
});

it("should generate JWT token after register", async () => {
  const response = await request(app).post("/api/users/signup").send({
    name: "Sourav Majumdar",
    email: "sourav.dev1@gmail.com",
    password: "123456",
    passwordConform: "123456",
  });

  expect(response.body.token).toBeDefined();
});

it("should return 400 if password and passwordConform does not match", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      name: "Sourav Majumdar",
      email: "sourav.dev1@gmail.com",
      password: "123456",
      passwordConform: "12356",
    })
    .expect(400);
});
