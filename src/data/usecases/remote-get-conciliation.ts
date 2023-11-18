import {
    GetConciliationCase,
    GetConciliationSpace,
} from "../../domain/usecases";
import { IHttpClient } from "../protocols/http";

export class RemoteGetConciliation implements GetConciliationCase {
    constructor(
        private readonly httpClient: IHttpClient<GetConciliationSpace.Model[]>,
        private readonly url: string
    ) {}

    async get(): Promise<GetConciliationSpace.Model[]> {
        const response = await this.httpClient.request({
            method: "get",
            url: this.url,
        });

        return response.body;
    }
}
