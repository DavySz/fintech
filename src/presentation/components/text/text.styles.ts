import { styled } from "styled-components";

import { transformToRem } from "../../helpers/transform-pix-rem";
import { getColor } from "../../themes/mappers";
import { type ICustomText } from "./text.types";

export const CustomText = styled.span<ICustomText>`
    color: ${({ color }) => getColor(color)};
    font-weight: ${({ weight }) => weight};
    font-size: ${({ size }) => transformToRem(Number(size))}rem;
    text-align: ${({ align }) => align};
`;
