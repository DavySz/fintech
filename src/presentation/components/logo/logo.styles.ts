import { HandCoins } from "@phosphor-icons/react";
import { styled } from "styled-components";

import { formatPxToRem } from "../../helpers/format-css-value/format-px-to-rem";
import { Text } from "../text/text";

export const CustomLogo = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    flex-direction: column;
`;

export const StyledHandCoins = styled(HandCoins)`
    font-weight: ${(props) => props.weight};

    @media (min-width: 320px) and (max-width: 1020px) {
        font-size: ${formatPxToRem(48)}rem;
    }

    @media (min-width: 1021px) {
        font-size: ${formatPxToRem(75)}rem;
    }
`;

export const CustomText = styled(Text)`
    @media (min-width: 320px) and (max-width: 1020px) {
        color: ${({ theme }) => theme.colors.white.default};
        font-size: ${formatPxToRem(28)}rem;
    }
`;
