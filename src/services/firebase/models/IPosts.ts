export interface IData {
    title: string;
    contentMarkdown: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IPosts {
    key: string;
    data: IData;
}