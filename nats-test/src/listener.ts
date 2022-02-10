import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { CourseCreatedListener } from "./events/course-created-listener";
console.clear();

const stan = nats.connect("udemy", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Nats Listener connected...");

  stan.on("close", () => {
    console.log("Nats Listener closed...");
    process.exit();
  });

  new CourseCreatedListener(stan).listen();
});

process.on("SIGTERM", () => stan.close());
process.on("SIGINT", () => stan.close());
