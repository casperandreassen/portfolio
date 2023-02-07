import mongoose, { Schema, Model, Document } from 'mongoose';

type ProjectDocument = Document & {
  projectName: string;
  projectShortDescription: string;
  projectAuthor: string;
  createdDate: Date;
  coverUrl: string;
  documentBody: string;
};

type ProjectInput = {
  projectName: ProjectDocument['projectName'];
  projectShortDescription: ProjectDocument['projectShortDescription'];
  projectAuthor: ProjectDocument['projectAuthor'];
  createdDate: ProjectDocument['createdDate'];
  coverUrl: ProjectDocument['coverUrl'];
  documentBody: ProjectDocument['documentBody'];
};

const projectSchema = new Schema(
  {
    projectName: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    projectShortDescription: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    projectAuthor: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    createdDate: {
      type: Schema.Types.Date,
      required: true,
      unique: false,
    },
    coverUrl: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    documentBody: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
  },
  {
    collection: 'projects',
    timestamps: true,
  },
);

const Project: Model<ProjectDocument> = mongoose.model<ProjectDocument>('Project', projectSchema);

export { Project, ProjectInput, ProjectDocument };
