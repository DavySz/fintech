import { makeRemoteSignUp } from "../usecases";

import { SignUp } from "../../../presentation/pages/sign-up/sign-up";
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
