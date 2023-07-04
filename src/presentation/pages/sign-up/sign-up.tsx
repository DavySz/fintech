import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Divider } from "../../components/divider/divider";
import { Input } from "../../components/input/input";
import { Text } from "../../components/text/text";
import { Info } from "./info/info";
import {
    Container,
    Form,
    InputWrapper,
    Disclaimer,
    MobileInfo,
    Aside,
    Main,
    SignInText,
} from "./sign-up.styles";

export const SignUp: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigateToSignIn = () => {
        navigate("/");
    };

    return (
        <Container>
            <Aside>
                <Info />
            </Aside>
            <Main>
                <MobileInfo>
                    <Info />
                </MobileInfo>
                <Form>
                    <SignInText size="24" weight="500" color="white-default">
                        Cadastre-se
                    </SignInText>
                    <InputWrapper>
                        <Input type="email" placeholder="email" />
                        <Input type="password" placeholder="senha" />
                        <Input
                            type="password"
                            placeholder="confirme sua senha"
                        />
                    </InputWrapper>
                    <Button>Cadastrar</Button>
                    <Disclaimer>
                        <Divider />
                        <Text size="24" weight="500" color="white-default">
                            ou
                        </Text>
                        <Divider />
                    </Disclaimer>
                    <Button variant="tertiary" onClick={handleNavigateToSignIn}>
                        Voltar
                    </Button>
                </Form>
            </Main>
        </Container>
    );
};
