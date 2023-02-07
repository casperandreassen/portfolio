export type Project = {
    _id: string;
    projectName: string;
    projectShortDescription: string;
    projectAuthor: string;
    createdDate: Date;
    coverUrl: string;
    documentBody: string;
}

export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
}