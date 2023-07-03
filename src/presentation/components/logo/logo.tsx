import { HandCoins } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

import { Text } from "../text/text";
import { CustomLogo } from "./logo.styles";
import { type ILogo } from "./logo.types";

export const Logo: React.FC<ILogo> = ({ onlyAsset }) => {
    const { colors } = useTheme();

    function renderText(): React.ReactNode | null {
        if (onlyAsset) return null;

        return (
            <Text size="48" weight="400">
                fintech
            </Text>
        );
    }

    return (
        <CustomLogo>
            <HandCoins
                color={colors.orange.default}
                weight="duotone"
                size={120}
            />
            {renderText()}
        </CustomLogo>
    );
};
