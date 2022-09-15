import React, { FC } from "react";
import { IGallery } from "../../types";
import CardList from "../imageList";
import { Card } from "../common/card";
import FileButton from "../common/fileButton";

const Gallery: FC<IGallery> = ({
  images,
  uploadImage,
  deleteImage,
  setImageSelected,
  setImageOpen,
  setCropVisible,
}) => {
  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    await uploadImage(file, 0);
  };

  /*

  const getImages = useCallback(async () => {
    try {
      const response = await fetchImages({
        endpoint: "/decks/images/",
        data: {
          deckid: "1",
          page: 1,
          limit: 10,
        },
      });
      setImages(response.items);
    } catch (error) {
      console.log(error);
    }
  }, [setImages]);

  const handleChange = async (files: any) => {
    const extension = files[0].name.split(".").pop();

    const image = await getImageProperties(files[0]);
    const data = { ...image, deckid: "1", item: 0 };

    try {
      const { url } = await uploadImageProperties({
        endpoint: "/decks/image/upload_url",
        data,
      });

      if (url) {
        const { status } = await uploadImageToS3({
          endpoint: url,
          data: files[0],
        });

        if (status === 200) {
          const shortenedUrl = getUrlByExtension(url, extension);

          const response = await saveImage({
            endpoint: "/decks/image/save",
            data: {
              deckid: "1",
              url: shortenedUrl,
            },
          });

          if(response) {
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
*/
  return (
    <Card
      title="Add an image"
      subtitle="Select an image from the library"
      bottom={
        <div className="gallery-footer">
          <FileButton text="UPLOAD IMAGE" onChange={(e) => handleFile(e)} />
        </div>
      }
    >
      <div className="grid-images">
      {!!images.length &&
        images?.map((item, i) => (
          <CardList
            key={i}
            {...item}
            setImageSelected={setImageSelected}
            deleteImage={deleteImage}
            setImageOpen={setImageOpen}
            setCropVisible={setCropVisible}
          />
        ))}
      </div>
    
    </Card>
  );
};

export default Gallery;
