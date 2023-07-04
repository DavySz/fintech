import { css, styled } from "styled-components";

import { formatPxToRem } from "../../helpers/format-css-value/format-px-to-rem";
import { type ICustomCheckbox } from "./checkbox.types";

const isCheckedStyle = css`
    background-color: ${({ theme }) => theme.colors.purple.default};
`;

const isNotCheckedStyle = css`
    border: ${formatPxToRem(2)}rem solid
        ${({ theme }) => theme.colors.purple.default};
    background-color: ${({ theme }) => theme.colors.white.default};
`;

export const CustomCheckbox = styled.div<ICustomCheckbox>`
    display: flex;

    width: ${formatPxToRem(52)}rem;
    height: ${formatPxToRem(52)}rem;
    align-items: center;
    justify-content: center;

    border-radius: ${formatPxToRem(8)}rem;

    ${({ isChecked }) => isChecked && isCheckedStyle}
    ${({ isChecked }) => !isChecked && isNotCheckedStyle}
`;
