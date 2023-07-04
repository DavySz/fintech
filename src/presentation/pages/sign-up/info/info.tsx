import { Logo } from "../../../components/logo/logo";
import { Container, CustomText } from "./info.styles";

export const Info: React.FC = () => {
    return (
        <Container>
            <Logo />
            <CustomText
                size="48"
                weight="600"
                align="center"
                color={"neutrals-default"}
            >
                Controle suas
                <br />
                <CustomText
                    size="48"
                    weight="600"
                    align="center"
                    color={"purple-default"}
                >
                    finanças
                </CustomText>{" "}
                de forma
                <br />
                muito{" "}
                <CustomText
                    size="48"
                    weight="600"
                    align="center"
                    color={"purple-default"}
                >
                    simples!
                </CustomText>
            </CustomText>
        </Container>
    );
};
