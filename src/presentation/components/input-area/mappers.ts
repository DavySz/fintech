import { defaultTheme } from "../../themes/themes";
import { TInputVariant } from "./input-area.types";

export const getInputVariantColor = (variant: TInputVariant): string => {
    const colors: Record<TInputVariant, string> = {
        default: defaultTheme.colors.neutrals.default,
        success: defaultTheme.colors.green.default,
        error: defaultTheme.colors.red.default,
    };

    return colors[variant];
};
