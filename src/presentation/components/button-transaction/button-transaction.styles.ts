import { css, styled } from "styled-components";
import { ITransactionType } from "./button-transaction.types";

export const CustomButton = styled.button<ITransactionType>`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    padding: 8px;

    ${({ type, theme }) =>
        type === "income"
            ? css`
                  background-color: ${theme.colors.green.default};
              `
            : css`
                  background-color: ${theme.colors.red.default};
              `};

    border: none;

    cursor: pointer;
`;

export const IconWrapper = styled.div<ITransactionType>`
    ${({ type }) =>
        type == "income" &&
        css`
            rotate: 180deg;
        `}
`;
