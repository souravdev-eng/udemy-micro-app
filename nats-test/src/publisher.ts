import { randomBytes } from "crypto";
import nats from "node-nats-streaming";
import { CourseCreatedPublisher } from "./events/course-created-publisher";

console.clear();

const stan = nats.connect("udemy", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  await new CourseCreatedPublisher(stan).published({
    id: "123",
    title: "Book Title",
    price: 399,
    createdBy: "johndoe",
  });
});
