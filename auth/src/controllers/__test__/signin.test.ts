import request from "supertest";
import { app } from "../../app";

const user = {
  name: "Sourav Majumdar",
  email: "sourav.dev1@gmail.com",
  password: "123456",
  passwordConform: "123456",
};

it("should return 200 if user give valid credentials", async () => {
  await request(app).post(`/api/users/signup`).send(user).expect(201);

  await request(app)
    .post(`/api/users/signin`)
    .send({
      email: "sourav.dev1@gmail.com",
      password: "123456",
    })
    .expect(200);
});

it("should return 404 if email does not exist", async () => {
  await request(app).post(`/api/users/signup`).send(user).expect(201);

  await request(app)
    .post(`/api/users/signin`)
    .send({
      email: "sourav.dev1@gmail.com",
      password: "123",
    })
    .expect(404);

  await request(app)
    .post(`/api/users/signin`)
    .send({
      email: "sourav.devgmail.com",
      password: "123456",
    })
    .expect(404);
});
