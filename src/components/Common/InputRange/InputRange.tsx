import React from "react";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const InputRange = ({ value, onChange }: Props) => {
  return (
    <input
      type="range"
      value={value}
      min={1}
      max={3}
      step={0.1}
      onChange={(e) => onChange(+e.target.value)}
    />
  );
};

export default InputRange;
