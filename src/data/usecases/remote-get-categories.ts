import { GetCategoriesCase, GetCategoriesSpace } from "../../domain/usecases";
import { IHttpClient } from "../protocols/http";

export class RemoteGetCategories implements GetCategoriesCase {
    constructor(
        private readonly httpClient: IHttpClient<GetCategoriesSpace.Model[]>,
        private readonly url: string
    ) {}

    async get(): Promise<GetCategoriesSpace.Model[]> {
        const response = await this.httpClient.request({
            method: "get",
            url: this.url,
        });

        return response.body;
    }
}
