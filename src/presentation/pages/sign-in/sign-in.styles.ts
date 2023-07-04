import { styled } from "styled-components";

import { Text } from "../../components/text/text";
import { transformToRem } from "../../helpers/transform-pix-rem";

export const Container = styled.div`
    display: flex;
    align-items: stretch;

    height: 100vh;

    background-color: ${({ theme }) => theme.colors.neutrals.inverted};

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Aside = styled.aside`
    display: flex;
    flex: 1;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: ${transformToRem(120)}rem ${transformToRem(80)}rem;

    background-color: ${({ theme }) => theme.colors.neutrals.inverted};

    @media (max-width: 1020px) {
        display: none;
    }
`;

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 2;

    padding: 0 ${transformToRem(32)}rem;

    background-color: ${({ theme }) => theme.colors.purple.default};

    flex-direction: column;
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    gap: ${transformToRem(24)}rem;

    margin-bottom: ${transformToRem(48)}rem;
    margin-top: ${transformToRem(24)}rem;
`;

export const Disclaimer = styled.div`
    display: flex;

    align-items: center;

    width: 100%;

    gap: ${transformToRem(82)}rem;

    margin-top: ${transformToRem(48)}rem;
    margin-bottom: ${transformToRem(24)}rem;
`;

export const MobileInfo = styled.div`
    @media (min-width: 1024px) {
        display: none;
    }
`;

export const SignInText = styled(Text)`
    @media (min-width: 320px) and (max-width: 1023px) {
        display: none;
    }
`;
