import { useTheme } from "styled-components";

import { CustomLogo, CustomText, StyledHandCoins } from "./logo.styles";
import { type ILogo } from "./logo.types";

export const Logo: React.FC<ILogo> = ({ onlyAsset }) => {
    const { colors } = useTheme();

    function renderText(): React.ReactNode | null {
        if (onlyAsset) return null;

        return (
            <CustomText size="48" weight="400">
                fintech
            </CustomText>
        );
    }

    return (
        <CustomLogo>
            <StyledHandCoins color={colors.orange.default} weight="duotone" />
            {renderText()}
        </CustomLogo>
    );
};
