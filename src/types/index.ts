import React from "react";

export interface ICard {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bottom:any;
  preBottom?:any;
  close?:() => void;
}

export interface IimageList {
  id: any;
  fileName: string;
  url: string;
  size: string;
  extension: string;
  aspect_ratio: string;
  setImageSelected: React.Dispatch<any>;
  deleteImage: (id: number) => void;
  setCropVisible : React.Dispatch<any>;
}

export interface IGallery {
  images: any[];
  uploadImage: (files: File, type: number) => Promise<void>;
  setImageSelected: React.Dispatch<any>;
  deleteImage: (id: number) => void;
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
  url: string;
  name: string;
  aspectRatio: number;
  setCropVisible: React.Dispatch<any>;
}