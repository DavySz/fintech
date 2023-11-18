import {
    CreateTransactionCase,
    GetConciliationCase,
    GetTransactionsCase,
} from "../../../domain/usecases";

export interface IDashboard {
    remoteCreateTransaction: CreateTransactionCase;
    remoteGetTransactions: GetTransactionsCase;
    remoteGetConciliation: GetConciliationCase;
}
