import { formatCurrency } from "../../helpers/format-currency/format-currecy";
import { TColors } from "../../themes/mappers.types";
import { Text } from "../text/text";
import { Card, Header, IconWrapper } from "./conciliation-card.styles";
import { IConciliationCard } from "./conciliation-card.types";
import { iconsMapper } from "./mappers";

export const ConciliationCard: React.FC<IConciliationCard> = ({
    title,
    value,
    variant,
}) => {
    const titleColor: TColors =
        variant === "save" ? "white-default" : "neutrals-weakness";

    const textColor: TColors =
        variant === "save" ? "white-default" : "neutrals-default";

    const currencyValue: string =
        variant === "outcome"
            ? `-${formatCurrency(value)}`
            : formatCurrency(value);

    return (
        <Card variant={variant}>
            <Header>
                <Text color={titleColor} weight="500" size="18">
                    {title}
                </Text>
                <IconWrapper variant={variant}>
                    {iconsMapper(variant)}
                </IconWrapper>
            </Header>
            <Text weight="500" size="32" color={textColor}>
                {currencyValue}
            </Text>
        </Card>
    );
};
