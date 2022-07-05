export interface ICardList {
  id: any;
  name: string;
  url: string;
  size: string;
  extension: string;
  aspect_ratio: string;
  setImageSelected: React.Dispatch<any>;
  setImageOpen: React.Dispatch<any>;
  setCropVisible : React.Dispatch<any>;
}

export interface IGallery {
  data: any[];
  setImageSelected: React.Dispatch<any>;
  setImageOpen: React.Dispatch<any>;
  setCropVisible: React.Dispatch<any>;
}

export interface IGalleryCrop {
  listOfImages: any[];
  aspectRatio: number;
  maxWidth?: string;
  maxWeight?: string;
}

export interface IImageView {
  imgUrl: string;
  setIsVisible: React.Dispatch<any>;
}

