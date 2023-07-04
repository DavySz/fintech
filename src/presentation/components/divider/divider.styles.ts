import { styled } from "styled-components";

import { transformToRem } from "../../helpers/transform-pix-rem";

export const Line = styled.div`
    width: 100%;
    height: ${transformToRem(1)}rem;

    background-color: ${({ theme }) => theme.colors.white.default};
`;
