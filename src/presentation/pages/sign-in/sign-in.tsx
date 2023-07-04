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
} from "./sign-in.styles";

export const SignIn: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigateToSignUp = () => {
        navigate("/sign-up");
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
                        Login
                    </SignInText>
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
                    <Button variant="tertiary" onClick={handleNavigateToSignUp}>
                        Cadastre-se
                    </Button>
                </Form>
            </Main>
        </Container>
    );
};
