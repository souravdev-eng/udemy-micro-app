import { Listener, OrderCreatedEvent, Subjects } from "@udemy-micro/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/orderModel";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = "payments-service";

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const order = Order.build({
      id: data.id,
      price: data.course.price,
      userId: data.userId,
      orderStatus: data.status,
    });

    await order.save();
    msg.ack();
  }
}
