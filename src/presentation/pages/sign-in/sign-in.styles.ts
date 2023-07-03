import { styled } from "styled-components";

import { type ISection } from "./sign-in.types";

export const Container = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;
`;

export const Section = styled.div<ISection>`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    width: 50vw;
    height: 100vh;

    padding: 24px;

    background-color: ${({ theme, variant }) =>
        variant === "primary"
            ? theme.colors.neutrals.inverted
            : theme.colors.purple.default};

    gap: 48px;
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

    gap: 24px;

    margin-bottom: 48px;
    margin-top: 24px;
`;

export const Disclaimer = styled.div`
    display: flex;

    align-items: center;

    width: 100%;

    gap: 82px;

    margin-top: 48px;
    margin-bottom: 24px;
`;
