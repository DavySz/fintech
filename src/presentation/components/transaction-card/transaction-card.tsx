import { formatCurrency } from "../../helpers/format-currency/format-currecy";
import { TColors } from "../../themes/mappers.types";
import { Text } from "../text/text";
import { iconsMapper } from "./mappers";
import { Card, Details } from "./transaction-card.styles";
import { ITransactionCard } from "./transaction-card.types";

export const TransactionCard: React.FC<ITransactionCard> = ({
    date,
    icon,
    transactionType,
    value,
    title,
}) => {
    const valueColor: TColors =
        transactionType === "income" ? "green-default" : "red-default";

    const currencyValue: string =
        transactionType === "outcome"
            ? `-${formatCurrency(value)}`
            : formatCurrency(value);

    return (
        <Card>
            {iconsMapper(icon).icon}
            <Details>
                <Text size="16" weight="400">
                    {title}
                </Text>
                <Text size="16" weight="400" color="neutrals-weakness">
                    {date}
                </Text>
            </Details>
            <Text size="16" weight="400" color={valueColor}>
                {currencyValue}
            </Text>
        </Card>
    );
};
