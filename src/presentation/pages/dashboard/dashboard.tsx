import { Plus, X } from "@phosphor-icons/react";
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
import { CreateTransaction } from "../create-transaction/create-transaction";
import { useState } from "react";
import { SelectTransaction } from "../../components/select-transaction/select-transaction";

export const Dashboard: React.FC = () => {
    const theme = useTheme();
    const [registerTransaction, setRegisterTransaction] = useState(false);

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
                        {registerTransaction ? "Criar transação" : "Transações"}
                    </Text>
                    <IconWrapper>
                        {registerTransaction ? (
                            <X
                                size={24}
                                weight="thin"
                                color={theme.colors.neutrals.default}
                                onClick={() => setRegisterTransaction(false)}
                            />
                        ) : (
                            <Plus
                                size={24}
                                weight="thin"
                                color={theme.colors.neutrals.default}
                                onClick={() => setRegisterTransaction(true)}
                            />
                        )}
                    </IconWrapper>
                </ListHeader>
                {registerTransaction ? (
                    <CreateTransaction />
                ) : (
                    <Transactions>{renderTransactions()}</Transactions>
                )}
            </Main>
        </Container>
    );
};
