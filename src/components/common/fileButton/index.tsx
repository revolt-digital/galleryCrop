import React from "react";

type Props = {
  text?: string;
  onChange: (e: any) => void;
}

const FileButton = ({ text, onChange }: Props) => {
  return (
    <label className="file-button">
      <input onChange={onChange} type="file" />
      <span>{text}</span>
    </label>
  );
};

export default FileButton;
