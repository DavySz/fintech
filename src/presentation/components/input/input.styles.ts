import { styled } from "styled-components";

import type { IInputWrapper } from "./input.types";
import { getInputVariantColor } from "./mappers";

export const InputWrapper = styled.div<IInputWrapper>`
    display: flex;
    align-items: center;
    padding: 16px 24px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.input.background.default};

    border: 1px solid ${({ variant }) => getInputVariantColor(variant)};
`;

export const CustomInput = styled.input`
    border: none;

    margin-right: 24px;

    background-color: ${({ theme }) => theme.colors.input.background.default};

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.neutrals.weak};
    }
`;
