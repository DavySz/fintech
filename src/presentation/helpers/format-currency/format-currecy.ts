import { formatToBRL } from "brazilian-values";

export const formatCurrency = (currency: number): string =>
    formatToBRL(currency);
