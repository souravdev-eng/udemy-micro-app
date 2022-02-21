import { Subjects } from "./subjects";

export interface CourseUpdatedEvent {
  subject: Subjects.CourseUpdated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
