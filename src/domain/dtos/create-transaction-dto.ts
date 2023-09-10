export interface CreateTransactionDTO {
    user_id: string;
    category_id: string;
    title: string;
    value: string;
    type: string;
    description?: string;
}
