import { Check } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

import { CustomCheckbox } from "./checkbox.styles";
import { type ICheckbox } from "./checkbox.types";

export const Checkbox: React.FC<ICheckbox> = ({ isChecked, onClick }) => {
    const { colors } = useTheme();

    return (
        <CustomCheckbox isChecked={isChecked} onClick={onClick}>
            {isChecked && (
                <Check color={colors.white.default} weight="thin" size={32} />
            )}
        </CustomCheckbox>
    );
};
