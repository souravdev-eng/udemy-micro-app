import mongoose from "mongoose";
import { OrderEventStatus } from "@udemy-micro/common";
import { CourseDoc } from "./course-model";

export { OrderEventStatus };

interface OrderAttars {
  course: CourseDoc;
  userId: string;
  status: OrderEventStatus;
  expirationDate: Date;
}

interface OrderDoc extends mongoose.Document {
  course: CourseDoc;
  userId: string;
  status: OrderEventStatus;
  expirationDate: Date;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttars): OrderDoc;
}

const orderSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(OrderEventStatus),
      default: OrderEventStatus.Created,
    },
    expirationDate: {
      type: mongoose.Schema.Types.Date,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

orderSchema.statics.build = (attrs: OrderAttars) => {
  return new Order(attrs);
};

const Order = mongoose.model<OrderDoc, OrderModel>("Order", orderSchema);

export { Order };
