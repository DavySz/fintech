import { SignIn } from "../../../presentation/pages/sign-in/sign-in";
import { makeRemoteSignIn } from "../usecases/remote-sign-in.factory";

export const makeSignInPage = () => {
    return <SignIn remoteSignIn={makeRemoteSignIn()} />;
};
