import { Publisher, OrderCancelledEvent, Subjects } from "@udemy-micro/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subjects: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
