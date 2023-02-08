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
    email: string;
    firstName: string;
    lastName: string;
    role: number,
}