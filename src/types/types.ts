export interface Project {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    projectId:        string;
    post:             string;
    projectCreated:   string;
    gitRepo: string;
    linkToDemo: string;
    author: string;
    projectName:      string;
    createdAt:        string;
    updatedAt:        string;
    publishedAt:      string;
    shortDescription: string;

}


export interface ProjectCardType {
    id:         number;
    attributes: ProjectCardTypeAttributes;
}

export interface ProjectCardTypeAttributes {
    projectName:      string;
    shortDescription: string;
    projectID:        string;
    cover:            Cover;
}

export interface Cover {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:             string;
    alternativeText:  null;
    caption:          null;
    width:            number;
    height:           number;
    formats:          Formats;
    hash:             string;
    ext:              string;
    mime:             string;
    size:             number;
    url:              string;
    previewURL:       null;
    provider:         string;
    providerMetadata: null;
    createdAt:        Date;
    updatedAt:        Date;
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:    string;
    url:    string;
    hash:   string;
    mime:   string;
    name:   string;
    path:   null;
    size:   number;
    width:  number;
    height: number;
}