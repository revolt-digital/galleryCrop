export declare function getCroppedImg(imageSrc: any, name: string, pixelCrop: any): Promise<unknown>;
export declare function getAspectRatio(wi: number, he: number): string;
export declare function getImageProperties(file: File): Promise<any>;
export declare function getUrlByExtension(url: string, extension: string): string;
export declare function getFileExtension(fileName: string): string | undefined;
export declare function removeExtension(value: string): string;
export declare function normalizeFilename(id: string, filename: string): string;
