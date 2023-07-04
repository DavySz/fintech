import { styled } from "styled-components";

import { Text } from "../../../components/text/text";
import { formatPxToRem } from "../../../helpers/format-css-value/format-px-to-rem";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    gap: ${formatPxToRem(32)}rem;
`;

export const CustomText = styled(Text)`
    @media (min-width: 320px) and (max-width: 768px) {
        color: ${({ theme }) => theme.colors.white.default};
        font-weight: 500;
        font-size: ${formatPxToRem(30)}rem;

        margin-bottom: ${formatPxToRem(48)}rem;
    }

    @media (min-width: 769px) and (max-width: 1023px) {
        color: ${({ theme }) => theme.colors.white.default};
        font-weight: 500;
        font-size: ${formatPxToRem(36)}rem;

        margin-bottom: ${formatPxToRem(48)}rem;
    }

    @media (min-width: 1023px) {
        font-size: ${formatPxToRem(28)}rem;
    }
`;
