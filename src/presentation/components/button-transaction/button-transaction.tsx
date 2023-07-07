import { useTheme } from "styled-components";
import { CustomArrowDownRight } from "../conciliation-card/conciliation-card.styles";
import { CustomButton, IconWrapper } from "./button-transaction.styles";
import { IButtonTransaction } from "./button-transaction.types";

export const ButtonTransaction: React.FC<IButtonTransaction> = ({
    onClick,
    type,
}) => {
    const theme = useTheme();

    return (
        <CustomButton onClick={onClick} type={type}>
            <IconWrapper type={type}>
                <CustomArrowDownRight
                    color={theme.colors.white.default}
                    weight="thin"
                    size={32}
                />
            </IconWrapper>
        </CustomButton>
    );
};
