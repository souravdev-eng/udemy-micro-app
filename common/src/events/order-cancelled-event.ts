import { Subjects } from "./subjects";
import { OrderEventStatus } from "./types/order-event-status";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    status: OrderEventStatus;
    course: {
      id: string;
      price: number;
    };
  };
}
