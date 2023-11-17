import { RemoteSignUp } from "../../../data/usecases";
import { SignUpCase } from "../../../domain/usecases";
import { makeCryptoEncryptAdapter } from "../adapters/encrypt";
import { makeAxiosHttpClientAdapter } from "../http";

export const makeRemoteSignUp = (): SignUpCase => {
    const url = String(process.env.BFF_URL);

    const axiosHttpClientAdapter = makeAxiosHttpClientAdapter<void>();
    const encryptAdapter = makeCryptoEncryptAdapter();

    const remoteSignUp = new RemoteSignUp(
        axiosHttpClientAdapter,
        encryptAdapter,
        url
    );

    return remoteSignUp;
};
