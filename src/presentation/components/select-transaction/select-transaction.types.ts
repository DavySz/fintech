import { ReactNode } from "react";
import { CardType } from "../transaction-card/transaction-card.types";

export interface ISelectTransaction {
    isVisible: boolean;
    onClose: () => void;
    onChange: (value: CardType) => void;
}

export interface IIcons {
    category: CardType;
    label: string;
    icon: ReactNode;
}
