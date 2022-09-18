import classNames from "classnames";
import React, { ChangeEvent } from "react";

type Props = {
  text?: string;
  outline?: boolean;
  transparent?: boolean;
  primary?: boolean;
  icon?: React.ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FileButton = ({
  text,
  outline,
  transparent,
  primary,
  icon,
  onChange,
}: Props) => {
  return (
    <label
      className={classNames(
        "button",
        { "button-outline": outline },
        { "button-transparent": transparent },
        { "button-primary": primary }
      )}
    >
      <input onChange={onChange} type="file" accept="image/png, image/gif, image/jpeg, image/jpg" />
      <span className="file-button-text">
        {!!icon && icon}
        {!!text && text}
      </span>
    </label>
  );
};

export default FileButton;
