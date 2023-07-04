import { HandCoins } from "@phosphor-icons/react";
import { styled } from "styled-components";

import { transformToRem } from "../../helpers/transform-pix-rem";
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
        font-size: ${transformToRem(48)}rem;
    }

    @media (min-width: 1021px) {
        font-size: ${transformToRem(75)}rem;
    }
`;

export const CustomText = styled(Text)`
    @media (min-width: 320px) and (max-width: 1020px) {
        color: ${({ theme }) => theme.colors.white.default};
        font-size: ${transformToRem(28)}rem;
    }
`;
