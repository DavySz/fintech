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

export const icons = [
    {
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
