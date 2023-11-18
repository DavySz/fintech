import {
    CreateTransactionCase,
    CreateTransactionSpace,
} from "../../domain/usecases";
import { IHttpClient } from "../protocols/http";

export class RemoteCreateTransaction implements CreateTransactionCase {
    constructor(
        private readonly httpClient: IHttpClient<void>,
        private readonly url: string
    ) {}

    async create(params: CreateTransactionSpace.Params): Promise<void> {
        await this.httpClient.request({
            url: this.url,
            method: "post",
            body: params,
        });
    }
}
