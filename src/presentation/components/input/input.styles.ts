import { styled } from "styled-components";

import { transformToRem } from "../../helpers/transform-pix-rem";
import type { IInputWrapper } from "./input.types";
import { getInputVariantColor } from "./mappers";

export const InputWrapper = styled.div<IInputWrapper>`
    display: flex;
    align-items: center;
    padding: ${transformToRem(16)}rem ${transformToRem(24)}rem;

    border-radius: ${transformToRem(8)}rem;

    background-color: ${({ theme }) => theme.colors.input.background.default};

    border: ${transformToRem(2)}rem solid
        ${({ variant }) => getInputVariantColor(variant)};

    width: 100%;

    @media (max-width: 368px) {
        width: ${transformToRem(300)}rem;
    }
`;

export const CustomInput = styled.input`
    border: none;

    margin-right: ${transformToRem(24)}rem;

    background-color: ${({ theme }) => theme.colors.input.background.default};

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.neutrals.weakness};
    }
`;
