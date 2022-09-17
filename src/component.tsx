import React from "react";
import GalleryCrop from "./galleryCrop";

function Component() {
  const handleImageSelect = (image: any) => {
   console.log(image)
  }

  return <GalleryCrop deckid="1" aspectRatio={1/1} onSelect={handleImageSelect} />;
}

export default Component;
