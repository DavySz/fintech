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
import { CreateTransaction } from "../create-transaction/create-transaction";
import { useEffect, useState } from "react";
import { IDashboard } from "./dashboard.types";
import { PageState } from "../../common/types";
import { ConciliationModel, TransactionModel } from "../../../domain/models";
import { CreateTransactionSpace } from "../../../domain/usecases";

export const Dashboard: React.FC<IDashboard> = ({
    remoteGetConciliation,
    remoteGetTransactions,
    remoteCreateTransaction,
}) => {
    const theme = useTheme();
    const [conciliationState, setConciliationState] =
        useState<PageState>("loading");
    const [listState, setListState] = useState<PageState>("loading");
    const [conciliation, setConciliation] = useState<ConciliationModel[]>([]);
    const [transactions, setTransactions] = useState<TransactionModel[]>([]);
    const [registerTransaction, setRegisterTransaction] = useState(false);

    const renderTransactions = () => {
        return transactions.map((transaction) => {
            return (
                <TransactionCard
                    transactionType={transaction.type}
                    value={Number(transaction.value)}
                    icon={transaction.category_id}
                    key={transaction.category_id}
                    date={transaction.created_at}
                    title={transaction.title}
                />
            );
        });
    };

    const renderScope = () => {
        if (registerTransaction) {
            return (
                <CreateTransaction
                    handleCreateTransaction={handleCreateTransaction}
                />
            );
        }

        return <Transactions>{renderTransactions()}</Transactions>;
    };

    const getConciliationValue = (type: "income" | "outcome" | "save") => {
        const card = conciliation.find((item) => item.type === type);
        if (card) return Number(card.value);
        return 0;
    };

    const handleCreateTransaction = (params: CreateTransactionSpace.Params) => {
        remoteCreateTransaction.create(params);
    };

    const loadTransactions = async () => {
        setListState("loading");

        try {
            const response = await remoteGetTransactions.get();
            setTransactions(response);

            setListState("ready");
        } catch {
            setListState("error");
        }
    };

    const loadConciliation = async () => {
        setConciliationState("loading");

        try {
            const response = await remoteGetConciliation.get();
            setConciliation(response);

            setConciliationState("ready");
        } catch {
            setConciliationState("error");
        }
    };

    const loadData = async () => {
        await Promise.all([loadTransactions, loadConciliation]);
    };

    useEffect(() => {
        loadData();
    }, []);

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
                        value={getConciliationValue("income")}
                        variant="income"
                        title="Entrada"
                    />
                    <ConciliationCard
                        value={getConciliationValue("outcome")}
                        variant="outcome"
                        title="Saída"
                    />
                    <ConciliationCard
                        value={getConciliationValue("save")}
                        variant="save"
                        title="Saldo"
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
                {renderScope()}
            </Main>
        </Container>
    );
};
