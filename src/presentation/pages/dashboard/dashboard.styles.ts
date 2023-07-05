import { styled } from "styled-components";
import { formatPxToRem } from "../../helpers/format-css-value/format-px-to-rem";
import { Text } from "../../components/text/text";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    min-height: 100vh;

    min-width: 340px;

    background-color: ${({ theme }) => theme.colors.neutrals.inverted};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;

    min-height: 25vh;

    width: 100%;

    padding: ${formatPxToRem(30)}rem ${formatPxToRem(26)}rem;

    background-color: ${({ theme }) => theme.colors.purple.default};
`;

export const Welcome = styled.div`
    display: flex;
    margin-bottom: ${formatPxToRem(36)}rem;
`;

export const CustomText = styled(Text)`
    @media (max-width: 410px) {
        font-size: 24px;
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;

    align-self: center;

    max-width: ${formatPxToRem(995)}rem;

    width: 100%;

    margin: 0 ${formatPxToRem(120)}rem;
`;

export const Cards = styled.div`
    display: flex;

    align-items: center;

    justify-content: space-between;

    width: 100%;

    margin-top: ${formatPxToRem(-105)}rem;

    margin-bottom: ${formatPxToRem(32)}rem;

    gap: 24px;

    @media (max-width: 1030px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const ListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin-bottom: ${formatPxToRem(16)}rem;
`;

export const IconWrapper = styled.div`
    height: ${formatPxToRem(32)}rem;
    width: ${formatPxToRem(32)}rem;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: ${formatPxToRem(16)}rem;

    background-color: ${({ theme }) => theme.colors.input.background.default};

    cursor: pointer;
`;

export const Transactions = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${formatPxToRem(8)}rem;

    margin-bottom: ${formatPxToRem(120)}rem;

    width: 100%;
`;
