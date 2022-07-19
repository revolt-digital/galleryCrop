import React, { FC } from "react";
import { IimageList } from "../../interfaces/types.ts";
import { Button } from "../Common/Button/Button";

const ImageList: FC<IimageList> = ({
  id,
  name,
  url,
  size,
  setImageSelected,
  setImageOpen,
  setCropVisible
}) => {
  return (
    <div className='ilContainer'>
      <div className='ilImageDetails'>
        <img className='ilThumbnail' src={url} alt="thumbnail" />
        <div className='ilIconsContainer'>
        <Button text='VIEW' onClick={() => {setImageSelected(id); setImageOpen(true)}} transparent/> 
        <Button text='EDIT' onClick={() => {setImageSelected(id); setCropVisible(true)}} transparent/> 
        <Button text='DELETE' onClick={() => {setImageSelected(id); console.log(id)}} transparent/> 
      </div>
        <div className='ilImageDetails'>
          <div className='ilDescription'>
            <span className='ilNameLabel'>Name: {name}</span>
            <span className='ilSizeLabel'>Size: {size}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageList;
