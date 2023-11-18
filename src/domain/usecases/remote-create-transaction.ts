import { CreateTransactionDTO } from "../dtos";

export namespace CreateTransactionSpace {
    export interface Params extends CreateTransactionDTO {}
}

export interface CreateTransactionCase {
    create: (params: CreateTransactionSpace.Params) => Promise<void>;
}
