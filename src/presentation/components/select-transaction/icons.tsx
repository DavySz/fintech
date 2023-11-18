import {
    AirplaneTilt,
    Barbell,
    BeerBottle,
    BookBookmark,
    Car,
    CurrencyDollarSimple,
    Drop,
    Hamburger,
    HandCoins,
    LightbulbFilament,
    PawPrint,
    Popcorn,
    SpotifyLogo,
    TShirt,
    TrendUp,
    WifiHigh,
} from "@phosphor-icons/react";
import { defaultTheme } from "../../themes/themes";
import { IIcons } from "./select-transaction.types";

export const icons: IIcons[] = [
    {
        category: "hamburger",
        label: "Lanche",
        icon: (
            <Hamburger
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "coffee",
        label: "Café",
        icon: (
            <Hamburger
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "beer",
        label: "Bebida",
        icon: (
            <BeerBottle
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "spotify",
        label: "Spotfy",
        icon: (
            <SpotifyLogo
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "barbell",
        label: "Academia",
        icon: (
            <Barbell
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "currency",
        label: "Salário",
        icon: (
            <CurrencyDollarSimple
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "car",
        label: "Veiculo",
        icon: (
            <Car
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "book",
        label: "Livro",
        icon: (
            <BookBookmark
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "airplane",
        label: "Viagem",
        icon: (
            <AirplaneTilt
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "internet",
        label: "Internet",
        icon: (
            <WifiHigh
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "streaming",
        label: "Streaming",
        icon: (
            <Popcorn
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "shirt",
        label: "Roupas",
        icon: (
            <TShirt
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "water",
        label: "Água",
        icon: (
            <Drop
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "light",
        label: "Luz",
        icon: (
            <LightbulbFilament
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "pet",
        label: "Pet",
        icon: (
            <PawPrint
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "trend",
        label: "Investimentos",
        icon: (
            <TrendUp
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
    {
        category: "other",
        label: "Outro",
        icon: (
            <HandCoins
                color={defaultTheme.colors.neutrals.default}
                weight="thin"
                size={32}
            />
        ),
    },
];
