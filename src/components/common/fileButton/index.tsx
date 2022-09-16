import React, { ChangeEvent } from "react";

type Props = {
  text?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileButton = ({ text, onChange }: Props) => {
  return (
    <label className="button button-primary">
      <input onChange={onChange} type="file" />
      <span>{text}</span>
    </label>
  );
};

export default FileButton;
