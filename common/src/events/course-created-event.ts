import { Subjects } from "./subjects";

export interface CourseCreatedEvent {
  subject: Subjects.CourseCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
