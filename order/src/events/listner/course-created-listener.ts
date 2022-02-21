import { Subjects, Listener, CourseCreatedEvent } from "@udemy-micro/common";
import { Message } from "node-nats-streaming";
import { Course } from "../../models/course-model";
import { queueGroupName } from "./queue-group-name";

export class CourseCreatedListener extends Listener<CourseCreatedEvent> {
  subject: Subjects.CourseCreated = Subjects.CourseCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: CourseCreatedEvent["data"], msg: Message) {
    const { id, title, price } = data;

    const course = Course.build({
      price,
      title,
      id,
    });

    await course.save();

    msg.ack();
  }
}
