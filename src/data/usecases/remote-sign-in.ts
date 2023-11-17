import { UserModel } from "../../domain/models";
import { SignInCase, SignInSpace } from "../../domain/usecases/remote-sign-in";
import { Encrypt } from "../crypto";
import { IHttpClient } from "../protocols/http";

export class RemoteSign implements SignInCase {
    constructor(
        private readonly httpClient: IHttpClient<UserModel>,
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
            method: "get",
            body,
        });

        return response.body;
    }
}
