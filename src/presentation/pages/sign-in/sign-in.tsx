import { Button } from "../../components/button/button";
import { Divider } from "../../components/divider/divider";
import { Input } from "../../components/input/input";
import { Logo } from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import {
    Container,
    Section,
    Form,
    InputWrapper,
    Disclaimer,
} from "./sign-in.styles";

export const SignIn: React.FC = () => {
    return (
        <Container>
            <Section variant="primary">
                <Logo />
                <Text size="48" weight="600" align="center">
                    Controle suas
                    <br />
                    <Text
                        size="48"
                        weight="600"
                        align="center"
                        color="purple-default"
                    >
                        finanças
                    </Text>{" "}
                    de forma
                    <br />
                    muito{" "}
                    <Text
                        size="48"
                        weight="600"
                        align="center"
                        color="purple-default"
                    >
                        simples!
                    </Text>
                </Text>
            </Section>
            <Section variant="secondary">
                <Form>
                    <Text size="24" weight="500" color="white-default">
                        Login
                    </Text>
                    <InputWrapper>
                        <Input type="email" placeholder="email" />
                        <Input type="password" placeholder="senha" />
                    </InputWrapper>
                    <Button>Entrar</Button>
                    <Disclaimer>
                        <Divider />
                        <Text size="24" weight="500" color="white-default">
                            ou
                        </Text>
                        <Divider />
                    </Disclaimer>
                    <Button variant="tertiary">Cadastre-se</Button>
                </Form>
            </Section>
        </Container>
    );
};
