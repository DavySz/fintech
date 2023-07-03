import { styled } from "styled-components";

import { getColor } from "../../themes/mappers";
import { type ICustomText } from "./text.types";

export const CustomText = styled.span<ICustomText>`
    color: ${({ color }) => getColor(color)};
    font-weight: ${({ weight }) => weight};
    font-size: ${({ size }) => size}px;
    text-align: ${({ align }) => align};
`;
