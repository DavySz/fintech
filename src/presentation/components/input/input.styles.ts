import { styled } from "styled-components";

import { formatPxToRem } from "../../helpers/format-css-value/format-px-to-rem";
import type { IInputWrapper } from "./input.types";
import { getInputVariantColor } from "./mappers";

export const InputWrapper = styled.div<IInputWrapper>`
    display: flex;
    align-items: center;
    padding: ${formatPxToRem(16)}rem ${formatPxToRem(24)}rem;

    border-radius: ${formatPxToRem(8)}rem;

    background-color: ${({ theme }) => theme.colors.neutrals.inverted};

    border: ${formatPxToRem(2)}rem solid
        ${({ variant }) => getInputVariantColor(variant)};

    width: 100%;

    @media (max-width: 368px) {
        width: ${formatPxToRem(300)}rem;
    }
`;

export const CustomInput = styled.input`
    border: none;

    margin-right: ${formatPxToRem(24)}rem;

    background-color: ${({ theme }) => theme.colors.neutrals.inverted};

    width: 100%;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.neutrals.weakness};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
