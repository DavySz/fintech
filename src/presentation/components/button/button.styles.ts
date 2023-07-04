import { css, styled } from "styled-components";

import { transformToRem } from "../../helpers/transform-pix-rem";
import { type ICustomButton } from "./button.types";
import { getBackgroundVariantColor } from "./mappers";

const secondaryStyles = css`
    border: ${transformToRem(1)}rem solid
        ${({ theme }) => theme.colors.neutrals.default};
`;

export const CustomButton = styled.button<ICustomButton>`
    border: none;

    width: 100%;

    align-items: center;
    justify-content: center;

    padding: ${transformToRem(16)}rem ${transformToRem(24)}rem;

    border-radius: ${transformToRem(12)}rem;

    background-color: ${({ variant }) => getBackgroundVariantColor(variant)};

    cursor: pointer;

    ${({ variant }) => variant === "secondary" && secondaryStyles}
`;
