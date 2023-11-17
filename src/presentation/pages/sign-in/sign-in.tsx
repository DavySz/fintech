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
import { ICallback, IEvent, ISignIn } from "./sign-in.types";
import { useState } from "react";
import { SignInSpace } from "../../../domain/usecases";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms/user.atom";

export const SignIn: React.FC<ISignIn> = ({ remoteSignIn }: ISignIn) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [_, setUser] = useRecoilState(userState);

    const navigate = useNavigate();

    const updateInputValue = (callback: ICallback, e: IEvent) => {
        callback(e.target.value);
    };

    const handleNavigateToSignUp = () => {
        navigate("/sign-up");
    };

    const handleNavigateToDashboard = () => {
        navigate("/dashboard");
    };

    const handleSingIn = async () => {
        const signInParams: SignInSpace.Params = {
            password,
            email,
        };

        try {
            const user = await remoteSignIn.signIn(signInParams);
            setUser(user);

            handleNavigateToDashboard();
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
                        Login
                    </SignInText>
                    <InputWrapper>
                        <Input
                            onChange={(e) => updateInputValue(setEmail, e)}
                            placeholder="email"
                            type="email"
                            value={email}
                        />
                        <Input
                            onChange={(e) => updateInputValue(setPassword, e)}
                            placeholder="senha"
                            value={password}
                            type="password"
                        />
                    </InputWrapper>
                    <Button onClick={handleSingIn}>Entrar</Button>
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
