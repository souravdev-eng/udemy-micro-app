import mongoose from "mongoose";

interface CourseAttars {
  title: string;
  price: number;
}

export interface CourseDoc extends mongoose.Document {
  title: string;
  price: number;
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

const Course = mongoose.model<CourseDoc, CourseModel>("Course", courseSchema);

export { Course };
