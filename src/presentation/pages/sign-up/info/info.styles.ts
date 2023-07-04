import { styled } from "styled-components";

import { Text } from "../../../components/text/text";
import { transformToRem } from "../../../helpers/transform-pix-rem";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    gap: ${transformToRem(32)}rem;
`;

export const CustomText = styled(Text)`
    @media (min-width: 320px) and (max-width: 768px) {
        display: none;
    }

    @media (min-width: 769px) and (max-width: 1023px) {
        display: none;
    }

    @media (min-width: 1023px) {
        font-size: ${transformToRem(28)}rem;
    }
`;
