import { CardType } from "../../presentation/components/transaction-card/transaction-card.types";

export interface TransactionModel {
    transaction_id: string;
    user_id: string;
    category_id: CardType;
    title: string;
    value: string;
    type: "income" | "outcome";
    description?: string;
    created_at: string;
    updated_at?: string;
}
