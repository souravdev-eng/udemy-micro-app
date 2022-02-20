import mongoose from "mongoose";

interface CourseAttars {
  title: string;
  createdBy: string;
  subDescription: string;
  description: string;
  courseImage: string;
  whatWillLearn: string;
  preRequirement: string;
  language: string;
  price: number;
}

interface CourseDocument extends mongoose.Document {
  title: string;
  createdBy: string;
  subDescription: string;
  description: string;
  courseImage: string;
  updatedAt: string;
  whatWillLearn: string;
  preRequirement: string;
  language: string;
  price: number;
  ratingQty: number;
  ratingAvg: number;
  students: number;
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
    subDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    courseImage: {
      type: String,
      required: true,
    },
    ratingQty: {
      type: Number,
      default: 1990,
    },
    // videos: {},
    ratingAvg: {
      type: Number,
      default: 4.2,
    },
    price: {
      type: Number,
      required: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    students: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: String,
      required: true,
      trim: true,
    },
    whatWillLearn: {
      type: [String],
    },
    preRequirement: {
      type: [String],
    },
    language: {
      type: String,
      enum: ["English", "Spanish", "French", "Hindi", "Arabic"],
      default: "English",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
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
