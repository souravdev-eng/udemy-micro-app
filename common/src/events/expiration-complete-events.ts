import { Subjects } from "./subjects";

export interface ExpirationCreatedEvent {
  subject: Subjects.ExpirationCreated;
  data: { id: string };
}
