import { CreateTransactionSpace } from "../../../domain/usecases";

export interface ICreateTransaction {
    handleCreateTransaction: (params: CreateTransactionSpace.Params) => void;
}
