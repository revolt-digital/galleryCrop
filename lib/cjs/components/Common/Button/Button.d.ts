import React, { FC } from "react";
declare type Props = {
    text?: string;
    outline?: boolean;
    onlyIcon?: boolean;
    transparent?: boolean;
    primary?: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
};
declare const Button: FC<Props>;
export default Button;
