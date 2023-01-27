import mongoose, { Schema, Model, Document } from 'mongoose';

type ProjectDocument = Document & {
  projectId: string;
  projectName: string;
  projectShortDescription: string;
  projectDescription: string;
  projectAuthor: string;
  createdDate: Date;
  linkToRepo: string;
  linkToLiveDemo: string | undefined;
  linkToVideoDemo: string;
  pictureUrl: string;
  techUsed: string[];
};

type ProjectInput = {
  projectId: ProjectDocument['projectId'];
  projectName: ProjectDocument['projectName'];
  projectShortDescription: ProjectDocument['projectShortDescription'];
  projectDescription: ProjectDocument['projectDescription'];
  projectAuthor: ProjectDocument['projectAuthor'];
  createdDate: ProjectDocument['createdDate'];
  linkToRepo: ProjectDocument['linkToRepo'];
  linkToLiveDemo: ProjectDocument['linkToLiveDemo'];
  linkToVideoDemo: ProjectDocument['linkToVideoDemo'];
  pictureUrl: ProjectDocument['pictureUrl'];
  techUsed: ProjectDocument['techUsed'];
};

const projectSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    projectName: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    projectShortDescription: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    projectDescription: {
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
    linkToRepo: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    linkToLiveDemo: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    linkToVideoDemo: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    pictureUrl: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
    techUsed: {
      type: Schema.Types.Array,
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
