import { styled } from "styled-components";

import { formatPxToRem } from "../../helpers/format-css-value/format-px-to-rem";

export const Line = styled.div`
    width: 100%;
    height: ${formatPxToRem(1)}rem;

    background-color: ${({ theme }) => theme.colors.white.default};
`;
