import { SignInCase, SignInSpace } from "../../domain/usecases";
import { IHttpClient } from "../protocols/http";
import { Encrypt } from "../crypto";

export class RemoteSign implements SignInCase {
    constructor(
        private readonly httpClient: IHttpClient<SignInSpace.Model>,
        private readonly encrypt: Encrypt,
        private readonly url: string
    ) {}

    async signIn(params: SignInSpace.Params): Promise<SignInSpace.Model> {
        const key = String(process.env.ENCRYPT_SECRET);
        const passwordEncrypted = this.encrypt.encrypt(params.password, key);

        const body: SignInSpace.Params = {
            password: passwordEncrypted,
            email: params.email,
        };

        const response = await this.httpClient.request({
            url: this.url,
            method: "post",
            body,
        });

        return response.body;
    }
}
