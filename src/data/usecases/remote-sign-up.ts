import { SignUpCase, SignUpSpace } from "../../domain/usecases/remote-sign-up";
import { IHttpClient } from "../protocols/http";
import { Encrypt } from "../crypto";

export class RemoteSignUp implements SignUpCase {
    constructor(
        private readonly httpClient: IHttpClient<void>,
        private readonly encrypt: Encrypt,
        private readonly url: string
    ) {}

    async signUp(params: SignUpSpace.Params) {
        const key = String(process.env.ENCRYPT_SECRET);
        const passwordEncrypted = this.encrypt.encrypt(params.password, key);

        const body: SignUpSpace.Params = {
            password: passwordEncrypted,
            email: params.email,
        };

        await this.httpClient.request({
            url: this.url,
            method: "post",
            body,
        });
    }
}
