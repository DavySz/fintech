import { css, styled } from "styled-components";

import { type ICustomCheckbox } from "./checkbox.types";

const isCheckedStyle = css`
    background-color: ${({ theme }) => theme.colors.purple.default};
`;

const isNotCheckedStyle = css`
    border: 2px solid ${({ theme }) => theme.colors.purple.default};
    background-color: ${({ theme }) => theme.colors.white.default};
`;

export const CustomCheckbox = styled.div<ICustomCheckbox>`
    display: flex;

    width: 52px;
    height: 52px;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    ${({ isChecked }) => isChecked && isCheckedStyle}
    ${({ isChecked }) => !isChecked && isNotCheckedStyle}
`;
