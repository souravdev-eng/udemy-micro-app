import { Subjects } from "./subjects";
import { OrderEventStatus } from "./types/order-event-status";

export interface OrderCreatedEvent {
  subjects: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderEventStatus;
    expirationDate: string;
    userId: string;
    course: {
      id: string;
      title: string;
      price: string;
    };
  };
}
