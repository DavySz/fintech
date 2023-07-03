import { css, styled } from "styled-components";

import { type ICustomButton } from "./button.types";
import { getBackgroundVariantColor } from "./mappers";

const secondaryStyles = css`
    border: 1px solid ${({ theme }) => theme.colors.neutrals.default};
`;

export const CustomButton = styled.button<ICustomButton>`
    border: none;

    width: 100%;

    align-items: center;
    justify-content: center;

    padding: 16px 24px;

    border-radius: 12px;

    background-color: ${({ variant }) => getBackgroundVariantColor(variant)};

    cursor: pointer;

    ${({ variant }) => variant === "secondary" && secondaryStyles}
`;
