import { styled } from "styled-components";
import { formatPxToRem } from "../../helpers/format-css-value/format-px-to-rem";

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: ${formatPxToRem(26)}rem ${formatPxToRem(24)}rem;

    background-color: ${({ theme }) => theme.colors.white.default};

    border-radius: ${formatPxToRem(8)}rem;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
`;
