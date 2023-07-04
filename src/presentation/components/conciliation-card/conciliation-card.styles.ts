import { css, styled } from "styled-components";
import { formatPxToRem } from "../../helpers/format-css-value/format-px-to-rem";
import { ICard, IIconWrapper } from "./conciliation-card.types";
import { ArrowDownRight, CurrencyDollarSimple } from "@phosphor-icons/react";
import { cardBackgroundMapper } from "./mappers";

export const Card = styled.div<ICard>`
    display: flex;
    flex-direction: column;

    border-radius: ${formatPxToRem(16)}rem;

    background-color: ${({ variant }) => cardBackgroundMapper(variant)};

    padding: ${formatPxToRem(16)}rem ${formatPxToRem(24)}rem;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    gap: ${formatPxToRem(12)}rem;

    margin-bottom: ${formatPxToRem(24)}rem;
`;

export const IconWrapper = styled.div<IIconWrapper>`
    ${({ variant }) =>
        variant == "income" &&
        css`
            rotate: 180deg;
        `}
`;

export const CustomArrowDownRight = styled(ArrowDownRight).attrs({
    weight: "thin",
    size: 32,
})`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CustomCurrencyDollar = styled(CurrencyDollarSimple).attrs({
    weight: "thin",
    size: 32,
})`
    display: flex;
    align-items: center;
    justify-content: center;
`;
