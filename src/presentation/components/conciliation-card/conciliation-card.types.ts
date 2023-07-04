export type TConciliationCardVariant = "income" | "outcome" | "save";

export interface IConciliationCard {
    variant: TConciliationCardVariant;
    title: string;
    value: number;
}

export interface IIconWrapper {
    variant: TConciliationCardVariant;
}

export interface ICard {
    variant: TConciliationCardVariant;
}
