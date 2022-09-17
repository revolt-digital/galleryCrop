import React from "react";
import classNames from "classnames";

type Props = {
  solid?: boolean;
}

const Spinner = ({ solid }: Props) => {
  return (
    <span className={
      classNames("loader", {
        "loader-solid": solid
      })
    }></span>
  )
}

export default Spinner;
