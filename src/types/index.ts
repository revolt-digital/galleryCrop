export type ImageType = {
  id: number,
  deck_id: number,
  url: string,
  fileName: string,
  aspectRatio: string,
  width: string,
  height: string,
  item:number,
  original_image: any,
  created_at: string,
  deleted_at: any,
  croppedImages: ImageType[]
}

export type SelectedImageType = {
   fileName: string, 
   url: string,
   id: number,
}

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}

export enum Endpoint {
  GET_IMAGES = "/decks/images/",
  UPLOAD_IMAGE = "/decks/image/upload_url",
  DELETE_IMAGE = "/decks/images/delete",
  SAVE_IMAGE = "/decks/image/save",
}