import mongoose, { Schema, Model, Document } from 'mongoose';

type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
};

type userInput = {
  firstName: UserDocument['firstName'];
  lastName: UserDocument['lastName'];
  email: UserDocument['email'];
  password: UserDocument['password'];
  token: UserDocument['token'];
};

const userSchema = new Schema(
  {
    firstName: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    lastName: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    token: {
      type: Schema.Types.String,
      required: false,
      unique: false,
    },
  },
  {
    collection: 'users',
  },
);

const User: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema);

export { User, userInput, UserDocument };