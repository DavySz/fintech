import { RemoteSign } from "../../../data/usecases";
import { UserModel } from "../../../domain/models";
import { SignInCase } from "../../../domain/usecases";
import { makeCryptoEncryptAdapter } from "../adapters/encrypt";
import { makeAxiosHttpClientAdapter } from "../http";

export const makeRemoteSignIn = (): SignInCase => {
    const url = `${process.env.BFF_URL}/auth`;

    const axiosHttpClientAdapter = makeAxiosHttpClientAdapter<UserModel>();
    const encryptAdapter = makeCryptoEncryptAdapter();

    const remoteSignIn = new RemoteSign(
        axiosHttpClientAdapter,
        encryptAdapter,
        url
    );

    return remoteSignIn;
};
