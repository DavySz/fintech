import { Envelope, Eye, EyeClosed } from "@phosphor-icons/react";
import { type ReactNode, useState } from "react";

import { CustomInput, InputWrapper } from "./input.styles";
import type { IProps } from "./input.types";
import { getInputVariantColor } from "./mappers";

export const Input: React.FC<IProps> = ({
    variant = "default",
    type,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle(): void {
        setIsOpen((prev) => !prev);
    }

    function renderIcon(): ReactNode | null {
        if (type === "email") {
            return (
                <Envelope
                    size={24}
                    weight="regular"
                    color={getInputVariantColor(variant)}
                />
            );
        }

        if (type === "password") {
            return isOpen ? (
                <Eye
                    size={24}
                    weight="regular"
                    onClick={handleToggle}
                    color={getInputVariantColor(variant)}
                />
            ) : (
                <EyeClosed
                    size={24}
                    weight="regular"
                    onClick={handleToggle}
                    color={getInputVariantColor(variant)}
                />
            );
        }

        return null;
    }

    return (
        <InputWrapper variant={variant}>
            <CustomInput type={isOpen ? "text" : type} {...rest} />
            {renderIcon()}
        </InputWrapper>
    );
};
