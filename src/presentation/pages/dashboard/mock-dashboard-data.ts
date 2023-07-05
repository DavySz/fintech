import { ITransactionCard } from "../../components/transaction-card/transaction-card.types";

export const mockTransactions: ITransactionCard[] = [
    {
        transactionType: "outcome",
        date: "31 de dez",
        icon: "hamburger",
        value: 10,
        title: "Lanche",
    },
    {
        transactionType: "income",
        date: "31 de dez",
        icon: "currency",
        value: 1200,
        title: "Salário",
    },

    {
        transactionType: "outcome",
        date: "31 de dez",
        icon: "car",
        value: 10,
        title: "Manutenção",
    },
    {
        transactionType: "outcome",
        date: "31 de dez",
        icon: "spotify",
        value: 16.9,
        title: "Spotify",
    },
    {
        transactionType: "outcome",
        date: "31 de dez",
        icon: "pet",
        value: 250,
        title: "Banho e Tosa",
    },
    {
        transactionType: "income",
        date: "31 de dez",
        icon: "currency",
        title: "Salário",
        value: 10,
    },
    {
        transactionType: "outcome",
        date: "31 de dez",
        icon: "book",
        value: 150,
        title: "Sherlock Holmes",
    },
];
