import { Message } from "node-nats-streaming";

import { CourseCreatedEvent } from "./course-created-event";
import { Listener } from "./base-listener";
import { Subjects } from "./subjects";

export class CourseCreatedListener extends Listener<CourseCreatedEvent> {
  subject: Subjects.CourseCreated = Subjects.CourseCreated;
  queueGroupName = "courseService";

  onMessage(data: CourseCreatedEvent["data"], msg: Message) {
    console.log("Event data!", data);
    msg.ack();
  }
}
