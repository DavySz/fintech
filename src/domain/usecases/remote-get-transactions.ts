import { TransactionModel } from "../models";

export namespace GetTransactionsSpace {
    export interface Model extends TransactionModel {}
}

export interface GetTransactionsCase {
    get: () => Promise<GetTransactionsSpace.Model[]>;
}
