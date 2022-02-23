import {
  ExpirationCreatedEvent,
  Publisher,
  Subjects,
} from "@udemy-micro/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCreatedEvent> {
  subjects: Subjects.ExpirationCreated = Subjects.ExpirationCreated;
}
