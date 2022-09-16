import React, { FC } from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
  buttons: React.ReactNode;
};

const Card: FC<Props> = ({
  title,
  children,
  buttons,
}) => {
  return (
    <div className="gallery-wrapper">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {children}
      </div>
      <div className="card-button-container">{buttons}</div>
    </div>
  );
};

export default Card;
