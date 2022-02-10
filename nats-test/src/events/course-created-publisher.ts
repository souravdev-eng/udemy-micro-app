import { CourseCreatedEvent } from "../events/course-created-event";
import { Publisher } from "./base-publisher";
import { Subjects } from "./subjects";

export class CourseCreatedPublisher extends Publisher<CourseCreatedEvent> {
  subject: Subjects.CourseCreated = Subjects.CourseCreated;
}
