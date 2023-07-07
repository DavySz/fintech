export interface ITransactionType {
    type: "income" | "outcome";
}

export interface IButtonTransaction extends ITransactionType {
    onClick: () => void;
}
