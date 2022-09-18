declare type Config = {
    endpoint: string;
    data: any;
};
export declare const uploadImageProperties: ({ endpoint, data }: Config) => Promise<{
    url: any;
}>;
export declare const saveImage: ({ endpoint, data }: Config) => Promise<any>;
export declare const uploadImageToS3: ({ endpoint, data }: Config) => Promise<{
    status: number;
}>;
export declare const fetchImages: ({ endpoint, data }: Config) => Promise<any>;
export declare const deleteImageById: ({ endpoint, data }: Config) => Promise<any>;
export {};
