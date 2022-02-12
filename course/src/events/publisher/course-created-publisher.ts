import { CourseCreatedEvent, Publisher, Subjects } from "@udemy-micro/common";

export class CourseCreatedPublisher extends Publisher<CourseCreatedEvent> {
  subjects: Subjects.CourseCreated = Subjects.CourseCreated;
}
