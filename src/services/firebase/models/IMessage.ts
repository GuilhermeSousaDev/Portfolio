export interface IMessage {
    key: string;
    data: {
        id: string;
        username: string;
        message: string;
        done: boolean;
        likes: number;
    }
}