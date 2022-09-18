/// <reference types="react" />
declare type Props = {
    value: number;
    onChange: (value: number) => void;
};
declare const InputRange: ({ value, onChange }: Props) => JSX.Element;
export default InputRange;
