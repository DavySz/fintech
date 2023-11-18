import {
    GetTransactionsCase,
    GetTransactionsSpace,
} from "../../domain/usecases";
import { IHttpClient } from "../protocols/http";

export class RemoteGetTransactions implements GetTransactionsCase {
    constructor(
        private readonly httpClient: IHttpClient<GetTransactionsSpace.Model[]>,
        private readonly url: string
    ) {}

    async get(): Promise<GetTransactionsSpace.Model[]> {
        const response = await this.httpClient.request({
            method: "get",
            url: this.url,
        });

        return response.body;
    }
}
