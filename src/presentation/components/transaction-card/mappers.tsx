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
import { CardType, IconsMapperResponse } from "./transaction-card.types";
import { defaultTheme } from "../../themes/themes";

export const iconsMapper = (type: CardType) => {
    const icons: Record<CardType, IconsMapperResponse> = {
        hamburger: {
            label: "Lanche",
            icon: (
                <Hamburger
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        coffee: {
            label: "Café",
            icon: (
                <Hamburger
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        beer: {
            label: "Bebida",
            icon: (
                <BeerBottle
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        spotify: {
            label: "Spotfy",
            icon: (
                <SpotifyLogo
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        barbell: {
            label: "Academia",
            icon: (
                <Barbell
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        currency: {
            label: "Salário",
            icon: (
                <CurrencyDollarSimple
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        car: {
            label: "Veiculo",
            icon: (
                <Car
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        book: {
            label: "Livro",
            icon: (
                <BookBookmark
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        airplane: {
            label: "Viagem",
            icon: (
                <AirplaneTilt
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        internet: {
            label: "Internet",
            icon: (
                <WifiHigh
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        streaming: {
            label: "Streaming",
            icon: (
                <Popcorn
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        shirt: {
            label: "Roupas",
            icon: (
                <TShirt
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        water: {
            label: "Água",
            icon: (
                <Drop
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        light: {
            label: "Luz",
            icon: (
                <LightbulbFilament
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        pet: {
            label: "Pet",
            icon: (
                <PawPrint
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        trend: {
            label: "Investimentos",
            icon: (
                <TrendUp
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
        other: {
            label: "Outro",
            icon: (
                <HandCoins
                    color={defaultTheme.colors.neutrals.default}
                    weight="thin"
                    size={32}
                />
            ),
        },
    };

    return icons[type];
};
