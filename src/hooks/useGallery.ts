import { useCallback, useEffect, useState } from "react";
import {
  deleteImage,
  fetchImages,
  saveImage,
  uploadImageProperties,
  uploadImageToS3,
} from "../services";
import { getImageProperties, getUrlByExtension } from "../utils";

type Props = {
  deckid: string;
};

const useGallery = ({ deckid }: Props) => {
  const [images, setImages] = useState<any[]>([]);

  const getImages = useCallback(async () => {
    try {
      const response = await fetchImages({
        endpoint: "/decks/images/",
        data: {
          deckid,
          page: 1,
          limit: 10,
        },
      });

      setImages(response.items);
    } catch (error) {
      console.log(error);
    }
  }, [setImages, deckid]);

  const deleteImageById = async (imageId: number) => {
    try {
      const response = await deleteImage({
        endpoint: "/decks/images/delete",
        data: {
          deckid,
          imageId,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (files: any, type: number) => {
    const extension = files.name.split(".").pop();
    const image = await getImageProperties(files);
    const data = { ...image, deckid, item: type };

    try {
      const { url } = await uploadImageProperties({
        endpoint: "/decks/image/upload_url",
        data,
      });

      if (url) {
        const { status } = await uploadImageToS3({
          endpoint: url,
          data: files,
        });

        if (status === 200) {
          const shortenedUrl = getUrlByExtension(url, extension);

          const response = await saveImage({
            endpoint: "/decks/image/save",
            data: {
              deckid,
              url: shortenedUrl,
            },
          });

          if (response) {
            getImages();
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, [getImages]);

  return {
    images,
    uploadImage,
    getImages,
    deleteImageById,
  };
};

export default useGallery;
