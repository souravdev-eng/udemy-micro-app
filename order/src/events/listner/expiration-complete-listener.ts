import {
  ExpirationCreatedEvent,
  Listener,
  OrderEventStatus,
  Subjects,
} from "@udemy-micro/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order-model";
import { OrderCancelledPublisher } from "../publisher/order-cancelled-publisher";
import { queueGroupName } from "./queue-group-name";

export class ExpirationCompleteListener extends Listener<ExpirationCreatedEvent> {
  subject: Subjects.ExpirationCreated = Subjects.ExpirationCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: ExpirationCreatedEvent["data"], msg: Message) {
    const order = await Order.findByIdAndUpdate(data.id, {
      status: OrderEventStatus.Cancelled,
    });

    if (!order) {
      throw new Error("Order not found");
    }

    await order.save();

    new OrderCancelledPublisher(this.client).published({
      id: order.id,
      status: order.status,
      course: {
        id: order.course.id,
        price: order.course.price,
      },
    });

    msg.ack();
  }
}
