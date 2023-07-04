import { css, styled } from "styled-components";

import { transformToRem } from "../../helpers/transform-pix-rem";
import { type ICustomCheckbox } from "./checkbox.types";

const isCheckedStyle = css`
    background-color: ${({ theme }) => theme.colors.purple.default};
`;

const isNotCheckedStyle = css`
    border: ${transformToRem(2)}rem solid
        ${({ theme }) => theme.colors.purple.default};
    background-color: ${({ theme }) => theme.colors.white.default};
`;

export const CustomCheckbox = styled.div<ICustomCheckbox>`
    display: flex;

    width: ${transformToRem(52)}rem;
    height: ${transformToRem(52)}rem;
    align-items: center;
    justify-content: center;

    border-radius: ${transformToRem(8)}rem;

    ${({ isChecked }) => isChecked && isCheckedStyle}
    ${({ isChecked }) => !isChecked && isNotCheckedStyle}
`;
