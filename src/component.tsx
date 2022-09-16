import React from "react";
import GalleryCrop from "./galleryCrop";

function Component() {
  const handleImageSelect = (image: string) => {
   console.log(image)
  }

  return <GalleryCrop aspectRatio={1/1} onSelect={handleImageSelect} />;
}

export default Component;
