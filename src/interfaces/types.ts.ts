export interface ICard {
  title: string;
  subtitle?: string;
  body:any;
  bottom:any;
  preBottom?:any;
  close?:() => void;
}

export interface IimageList {
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

export interface IButton {
  text?: string;
  outline?:boolean;
  onlyIcon?:boolean;
  transparent?:boolean;
  primary?:boolean;
  icon?: React.ContextType<any>;
  onClick?: () => void;
}
export interface ICropImage {
  imgUrl: string;
  aspectRatio: number;
  setCropVisible: React.Dispatch<any>;
}