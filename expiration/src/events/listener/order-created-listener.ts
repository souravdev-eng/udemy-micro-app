import {
  Listener,
  OrderCreatedEvent,
  OrderEventStatus,
  Subjects,
} from "@udemy-micro/common";
import { Message } from "node-nats-streaming";
import { expirationQueue } from "../../queue/expiration-completed-queue";
import { queueGroupName } from "./queue-group-name";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const expDelay =
      new Date(data.expirationDate).getTime() - new Date().getTime();
    expirationQueue.add(
      {
        orderId: data.id,
      },
      {
        delay: expDelay,
      }
    );

    msg.ack();
  }
}
