import mongoose, { Schema, Model, Document } from 'mongoose';

type contactEmailDocument = Document & {
  emailId: string;
  fromEmail: string;
  title: string;
  body: string;
};

type contactEmailInput = {
  emailId: contactEmailDocument['emailId'];
  fromEmail: contactEmailDocument['fromEmail'];
  title: contactEmailDocument['title'];
  body: contactEmailDocument['body'];
};

const contactEmailSchema = new Schema(
  {
    emailId: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    fromEmail: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    title: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    body: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
  },
  {
    collection: 'contactEmails',
    timestamps: true,
  },
);

const contactEmail: Model<contactEmailDocument> = mongoose.model<contactEmailDocument>('email', contactEmailSchema);

export { contactEmail, contactEmailInput, contactEmailDocument };
