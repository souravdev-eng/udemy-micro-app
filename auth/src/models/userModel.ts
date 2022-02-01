import mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface UserAttars {
  name: string;
  email: string;
  password: string;
  passwordConform: string;
}

interface UserModel extends mongoose.Model<UserDocument> {
  build: (attars: UserAttars) => UserDocument;
}

interface UserDocument extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordConform: string;
  role: string;
  image: string;
  createdAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "http://user.png",
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
    password: {
      type: String,
      required: true,
    },
    passwordConform: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

userSchema.statics.build = function (attars: UserAttars) {
  return new User(attars);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConform = undefined;
  next();
});

const User = mongoose.model<UserDocument, UserModel>("User", userSchema);

export { User };
