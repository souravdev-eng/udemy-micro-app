import {
  Listener,
  NotFoundError,
  OrderCancelledEvent,
  OrderEventStatus,
  Subjects,
} from "@udemy-micro/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/orderModel";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
  queueGroupName = "payments-service";

  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
    const order = await Order.findOne({ _id: data.id });

    if (!order) {
      throw new NotFoundError("Order not found");
    }
    order.set({ orderStatus: OrderEventStatus.Cancelled });
    await order.save();

    msg.ack();
  }
}
