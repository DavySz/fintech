export interface TransactionModel {
    transaction_id: string;
    user_id: string;
    category_id: string;
    title: string;
    value: string;
    type: string;
    description?: string;
    created_at: string;
    updated_at?: string;
}
