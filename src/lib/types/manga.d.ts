// Generated by https://quicktype.io

export interface Manga {
    result:   string;
    response: string;
    data:     MangaData[];
    limit:    number;
    offset:   number;
    total:    number;
}

export interface MangaData {
    id:            string;
    type:          RelationshipType;
    attributes:    DatumAttributes;
    relationships: Relationship[];
}

export interface DatumAttributes {
    title:                          Title;
    altTitles:                      { [key: string]: string }[];
    description:                    PurpleDescription;
    isLocked:                       boolean;
    links:                          { [key: string]: string };
    originalLanguage:               OriginalLanguage;
    lastVolume:                     string;
    lastChapter:                    string;
    publicationDemographic:         null | string;
    status:                         Status;
    year:                           number | null;
    contentRating:                  ContentRating;
    tags:                           Tag[];
    state:                          State;
    chapterNumbersResetOnNewVolume: boolean;
    createdAt:                      string;
    updatedAt:                      string;
    version:                        number;
    availableTranslatedLanguages:   string[];
    latestUploadedChapter:          string;
}

export enum ContentRating {
    Safe = "safe",
    Suggestive = "suggestive",
}

export interface PurpleDescription {
    en?:      string;
    ru?:      string;
    uk?:      string;
    "es-la"?: string;
    "pt-br"?: string;
    el?:      string;
}

export enum OriginalLanguage {
    Ja = "ja",
    PtBr = "pt-br",
}

export enum State {
    Published = "published",
}

export enum Status {
    Completed = "completed",
    Ongoing = "ongoing",
}

export interface Tag {
    id:            string;
    type:          TagType;
    attributes:    TagAttributes;
    relationships: any[];
}

export interface TagAttributes {
    name:        Title;
    description: FluffyDescription;
    group:       Group;
    version:     number;
}

export interface FluffyDescription {
}

export enum Group {
    Content = "content",
    Format = "format",
    Genre = "genre",
    Theme = "theme",
}

export interface Title {
    en: string;
}

export enum TagType {
    Tag = "tag",
}

export interface Relationship {
    id:       string;
    type:     RelationshipType;
    related?: string;
}

export enum RelationshipType {
    Artist = "artist",
    Author = "author",
    CoverArt = "cover_art",
    Creator = "creator",
    Manga = "manga",
}
