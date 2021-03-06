import { Subjects } from "./subjects";
import { OrderEventStatus } from "./types/order-event-status";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderEventStatus;
    expirationDate: string;
    userId: string;
    course: {
      id: string;
      title: string;
      price: number;
    };
  };
}
