import { SignUp } from "../../../presentation/pages/sign-up/sign-up";
import { makeRemoteSignUp } from "../usecases/remote-sign-up.factory";
import { makeEmailValidator, makePasswordValidator } from "../validation";

export const makeSignUpPage = () => {
    return (
        <SignUp
            remoteSignUp={makeRemoteSignUp()}
            emailValidator={makeEmailValidator()}
            passwordValidator={makePasswordValidator()}
        />
    );
};
