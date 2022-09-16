import { useCallback, useEffect, useMemo, useState } from "react";
import {
  deleteImageById,
  fetchImages,
  saveImage,
  uploadImageProperties,
  uploadImageToS3,
} from "../services";
import {
  getFileExtension,
  getImageProperties,
  getUrlByExtension,
} from "../utils";
import { ImageType, Endpoint } from "../types";

type Props = {
  deckid: string;
};

const imageSelectState = {
  url: "",
  fileName: "",
};

const useGallery = ({ deckid }: Props) => {
  const [items, setItems] = useState<ImageType[]>([]);
  const [imageSelected, setImageSelected] = useState(imageSelectState);
  const [isEdition, setIsEdition] = useState<boolean>(false);

  const images: ImageType[] = useMemo(
    () =>
      items.reduce((acc: any, curr) => {
        if (curr.croppedImages.length > 0) {
          curr.croppedImages.forEach((item) => {
            acc.push(item);
          });

          acc.push(curr);
        } else {
          acc.push(curr);
        }

        return acc;
      }, []),
    [items]
  );

  const getImages = useCallback(async () => {
    try {
      const response = await fetchImages({
        endpoint: Endpoint.GET_IMAGES,
        data: {
          deckid,
          page: 1,
          limit: 10,
        },
      });

      setItems(response.items);
    } catch (error) {
      console.log(error);
    }
  }, [deckid]);

  const uploadImage = async (file: any, type: number) => {
    const image = await getImageProperties(file);
    const extension = getFileExtension(file.name);

    try {
      const { url } = await uploadImageProperties({
        endpoint: Endpoint.UPLOAD_IMAGE,
        data: { ...image, deckid, item: type },
      });

      if (url) {
        const { status } = await uploadImageToS3({
          endpoint: url,
          data: file,
        });

        if (status === 200) {
          const shortenedUrl = getUrlByExtension(url, extension!);

          await saveImage({
            endpoint: Endpoint.SAVE_IMAGE,
            data: {
              deckid,
              url: shortenedUrl,
            },
          });

          getImages();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImage = async (imageId: number) => {
    try {
      await deleteImageById({
        endpoint: Endpoint.DELETE_IMAGE,
        data: {
          deckid,
          imageId,
        },
      });

      getImages();
    } catch (error) {
      console.log(error);
    }
  };

  const setEditImage = (id: number) => {
    const image = images.find((item) => id === item.id);

    if (image) {
      setImageSelected(image);
      setIsEdition(true);
    }
  };

  useEffect(() => {
    getImages();
  }, [getImages]);

  return {
    images,
    imageSelected,
    isEdition,
    uploadImage,
    getImages,
    deleteImage,
    setEditImage,
    setIsEdition,
  };
};

export default useGallery;
