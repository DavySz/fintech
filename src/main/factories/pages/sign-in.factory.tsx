import { SignIn } from "../../../presentation/pages/sign-in/sign-in";
import { makeRemoteSignIn } from "../usecases";

export const makeSignInPage = () => {
    return <SignIn remoteSignIn={makeRemoteSignIn()} />;
};
