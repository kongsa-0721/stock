export interface Ioptions {
    url: string;
    success: (res: any) => void;
    error: (err: any) => void;
}