import { Publisher, Subjects, OrderCreatedEvent } from "@udemy-micro/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subjects: Subjects.OrderCreated = Subjects.OrderCreated;
}
