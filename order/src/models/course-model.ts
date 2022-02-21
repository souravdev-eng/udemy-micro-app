import mongoose from "mongoose";
import { Order, OrderEventStatus } from "./order-model";

interface CourseAttars {
  id: string;
  title: string;
  price: number;
}

export interface CourseDoc extends mongoose.Document {
  title: string;
  price: number;
  isReserved(): Promise<boolean>;
}

interface CourseModel extends mongoose.Model<CourseDoc> {
  build(attrs: CourseAttars): CourseDoc;
}

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
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

courseSchema.statics.build = (attrs: CourseAttars) => {
  return new Course({
    _id: attrs.id,
    title: attrs.title,
    price: attrs.price,
  });
};

courseSchema.methods.isReserved = async function () {
  // this === the ticket document that we just called 'isReserved' on
  const existingOrder = await Order.findOne({
    course: this.id,
    status: {
      $in: [
        OrderEventStatus.Created,
        OrderEventStatus.AwaitOrderOrPending,
        OrderEventStatus.Completed,
      ],
    },
  });

  return !!existingOrder;
};

const Course = mongoose.model<CourseDoc, CourseModel>("Course", courseSchema);

export { Course };
