import { OrderEventStatus } from "@udemy-micro/common";
import mongoose from "mongoose";

interface OrderAttars {
  id: string;
  orderStatus: OrderEventStatus;
  price: number;
  userId: string;
}

interface OrderDocument extends mongoose.Document {
  orderStatus: OrderEventStatus;
  price: number;
  userId: string;
}

interface OrderModel extends mongoose.Model<OrderDocument> {
  build(attrs: OrderAttars): OrderDocument;
}

const orderSchema = new mongoose.Schema({
  orderStatus: {
    type: String,
    enum: Object.values(OrderEventStatus),
    default: OrderEventStatus.Created,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

orderSchema.statics.build = (attrs: OrderAttars) => {
  return new Order({
    _id: attrs.id,
    orderStatus: attrs.orderStatus,
    price: attrs.price,
    userId: attrs.userId,
  });
};

const Order = mongoose.model<OrderDocument, OrderModel>("Order", orderSchema);

export { Order };
