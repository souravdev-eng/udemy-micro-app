import request from "supertest";
import { app } from "../../app";

const user = {
  name: "Sourav Majumdar",
  email: "sourav.dev1@gmail.com",
  password: "123456",
  passwordConform: "123456",
};

it("should return a user object", async () => {
  const response = await request(app)
    .post(`/api/users/signup`)
    .send(user)
    .expect(201);

  await request(app)
    .get(`/api/users/currentuser`)
    .set("Authorization", "Bearer " + response.body.token)
    .expect(200);
});

it("should return 400 if user did not login and want to access currentuser", async () => {
  await request(app).get(`/api/users/currentuser`).expect(400);
});
