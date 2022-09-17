import { useCallback, useMemo, useState } from "react";
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
import { ImageType, Endpoint, SelectedImageType } from "../types";

type Props = {
  deckid: string;
};

const useGallery = ({ deckid }: Props) => {
  const [items, setItems] = useState<ImageType[]>([]);
  const [currentImage, setCurrentImage] = useState<ImageType>();

  const [imageSelected, setImageSelected] = useState<SelectedImageType>();
  const [isEdition, setIsEdition] = useState<boolean>(false);
  const [uploadImageLoading, setUploadImageLoading] = useState(false);

  const images: ImageType[] = useMemo(
    () =>
      items.reduce((acc: any, curr) => {
        if (curr.croppedImages.length > 0) {
          acc.push(curr);

          curr.croppedImages.forEach((item) => {
            acc.push(item);
          });
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
          limit: 100,
        },
      });

      setItems(response.items);
    } catch (error) {
      throw new Error(error);
    }
  }, [deckid]);

  const uploadImage = useCallback(
    async (file: any, type: number) => {
      setUploadImageLoading(true);
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
          }

          if (type === 0) {
            await getImages();
          }
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        setUploadImageLoading(false);
      }
    },
    [deckid, getImages]
  );

  const deleteImage = useCallback(
    async (imageId: number) => {
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
        throw new Error(error);
      }
    },
    [deckid, getImages]
  );

  const setEditImage = (id: number) => {
    const image = images.find((item) => id === item.id);

    if (image) {
      setCurrentImage(image);
      setIsEdition(true);
    }
  };

  return {
    images,
    imageSelected,
    setImageSelected,
    isEdition,
    uploadImage,
    uploadImageLoading,
    getImages,
    deleteImage,
    setEditImage,
    setIsEdition,
    currentImage,
    setCurrentImage,
  };
};

export default useGallery;
