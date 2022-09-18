import React, { ChangeEvent } from "react";
declare type Props = {
    text?: string;
    outline?: boolean;
    transparent?: boolean;
    primary?: boolean;
    icon?: React.ReactNode;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
declare const FileButton: ({ text, outline, transparent, primary, icon, onChange, }: Props) => JSX.Element;
export default FileButton;
