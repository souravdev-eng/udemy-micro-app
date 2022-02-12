import { CourseUpdatedEvent, Publisher, Subjects } from "@udemy-micro/common";

export class CourseUpdatedPublisher extends Publisher<CourseUpdatedEvent> {
  subjects: Subjects.CourseUpdated = Subjects.CourseUpdated;
}
