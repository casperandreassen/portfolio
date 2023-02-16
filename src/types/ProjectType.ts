export interface Project {
    data: ProjectData;
    meta: Meta;
}

export interface ProjectData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    projectID:        string;
    post:             string;
    projectCreated:   Date;
    projectName:      string;
    createdAt:        Date;
    updatedAt:        Date;
    publishedAt:      Date;
    shortDescription: string;
    gitRepo:          string;
    linkToDemo:       null;
    author:           string;
    cover:            Cover;
}

export interface Cover {
    data: CoverData;
}

export interface CoverData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
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
    blurhash:         string;
}

export interface Formats {
    thumbnail: Large;
    large:     Large;
    medium:    Large;
    small:     Large;
}

export interface Large {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Meta {
}