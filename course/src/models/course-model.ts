import mongoose from "mongoose";

interface CourseAttars {
  title: string;
  price: number;
  createdBy: string;
}

interface CourseDocument extends mongoose.Document {
  id: string;
  title: string;
  price: number;
  createdBy: string;
}

interface CourseModel extends mongoose.Model<CourseDocument> {
  build: (attars: CourseAttars) => CourseDocument;
}

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: String,
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

courseSchema.statics.build = function (attars: CourseAttars) {
  return new Course(attars);
};

const Course = mongoose.model<CourseDocument, CourseModel>(
  "Course",
  courseSchema
);

export { Course };
