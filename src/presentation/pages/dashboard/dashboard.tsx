import { Plus } from "@phosphor-icons/react";
import { ConciliationCard } from "../../components/conciliation-card/conciliation-card";
import { Text } from "../../components/text/text";
import {
    Cards,
    Container,
    CustomText,
    Header,
    IconWrapper,
    ListHeader,
    Main,
    Transactions,
    Welcome,
} from "./dashboard.styles";
import { useTheme } from "styled-components";
import { TransactionCard } from "../../components/transaction-card/transaction-card";
import { mockTransactions } from "./mock-dashboard-data";

export const Dashboard: React.FC = () => {
    const theme = useTheme();

    function renderTransactions() {
        return mockTransactions.map(
            ({ date, icon, transactionType, value, title }) => {
                return (
                    <TransactionCard
                        transactionType={transactionType}
                        title={title}
                        value={value}
                        date={date}
                        icon={icon}
                    />
                );
            }
        );
    }

    return (
        <Container>
            <Header>
                <Welcome>
                    <CustomText size="32" weight="500" color="white-default">
                        Dashboard - Olá, john
                    </CustomText>
                </Welcome>
            </Header>
            <Main>
                <Cards>
                    <ConciliationCard
                        value={2500}
                        title="Entrada"
                        variant="income"
                    />
                    <ConciliationCard
                        value={2500}
                        title="Saída"
                        variant="outcome"
                    />
                    <ConciliationCard
                        value={2500}
                        title="Saldo"
                        variant="save"
                    />
                </Cards>
                <ListHeader>
                    <Text size="18" weight="500">
                        Transações
                    </Text>
                    <IconWrapper>
                        <Plus
                            size={24}
                            color={theme.colors.neutrals.default}
                            weight="thin"
                        />
                    </IconWrapper>
                </ListHeader>
                <Transactions>{renderTransactions()}</Transactions>
            </Main>
        </Container>
    );
};
