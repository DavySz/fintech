import { TConciliationCardVariant } from "./conciliation-card.types";
import {
    CustomArrowDownRight,
    CustomCurrencyDollar,
} from "./conciliation-card.styles";
import { defaultTheme } from "../../themes/themes";

export const cardBackgroundMapper = (variant: TConciliationCardVariant) => {
    const colors: Record<TConciliationCardVariant, string> = {
        income: defaultTheme.colors.white.default,
        outcome: defaultTheme.colors.white.default,
        save: defaultTheme.colors.orange.default,
    };

    return colors[variant];
};

export const iconsColorMapper = (variant: TConciliationCardVariant) => {
    const colors: Record<TConciliationCardVariant, string> = {
        income: defaultTheme.colors.green.default,
        outcome: defaultTheme.colors.red.default,
        save: defaultTheme.colors.white.default,
    };

    return colors[variant];
};

export const iconsMapper = (variant: TConciliationCardVariant) => {
    const icons: Record<TConciliationCardVariant, React.ReactNode> = {
        income: <CustomArrowDownRight color={iconsColorMapper(variant)} />,
        outcome: <CustomArrowDownRight color={iconsColorMapper(variant)} />,
        save: <CustomCurrencyDollar color={iconsColorMapper(variant)} />,
    };

    return icons[variant];
};
