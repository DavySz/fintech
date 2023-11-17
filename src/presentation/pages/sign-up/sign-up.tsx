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
import { useState } from "react";
import { ICallback, IEvent, ISignUp } from "./sign-up.types";
import { SignUpSpace } from "../../../domain/usecases/remote-sign-up";

export const SignUp: React.FC<ISignUp> = ({
    remoteSignUp,
    emailValidator,
    passwordValidator,
}: ISignUp) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const updateInputValue = (callback: ICallback, e: IEvent) => {
        callback(e.target.value);
    };

    const navigate = useNavigate();

    const handleNavigateToSignIn = () => {
        navigate("/");
    };

    const validateFields = (): boolean => {
        if (password !== passwordConfirmation) return false;

        const passwordIsValid = passwordValidator.isValid(password);
        const emailIsValid = emailValidator.isValid(email);

        return passwordIsValid && emailIsValid;
    };

    const handleCreateUser = async () => {
        const isValid = validateFields();
        if (!isValid) return;

        const user: SignUpSpace.Params = {
            password,
            email,
        };

        try {
            await remoteSignUp.signUp(user);
            handleNavigateToSignIn();
        } catch (error) {
            console.log(error);
        }
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
                        <Input
                            type="email"
                            value={email}
                            placeholder="email"
                            onChange={(e) => updateInputValue(setEmail, e)}
                        />
                        <Input
                            type="password"
                            value={password}
                            placeholder="senha"
                            onChange={(e) => updateInputValue(setPassword, e)}
                        />
                        <Input
                            type="password"
                            value={passwordConfirmation}
                            placeholder="confirme sua senha"
                            onChange={(e) =>
                                updateInputValue(setPasswordConfirmation, e)
                            }
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
                    <Button variant="tertiary" onClick={handleCreateUser}>
                        Voltar
                    </Button>
                </Form>
            </Main>
        </Container>
    );
};
