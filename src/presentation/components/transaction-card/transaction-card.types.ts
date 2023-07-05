import { ReactNode } from "react";

export type CardType =
    | "hamburger"
    | "coffee"
    | "beer"
    | "spotify"
    | "barbell"
    | "currency"
    | "car"
    | "book"
    | "airplane"
    | "internet"
    | "streaming"
    | "shirt"
    | "water"
    | "light"
    | "pet"
    | "trend"
    | "other";

export type IconsMapperResponse = {
    label: string;
    icon: ReactNode;
};

export interface ITransactionCard {
    transactionType: "income" | "outcome";
    icon: CardType;
    value: number;
    date: string;
    title: string;
}
