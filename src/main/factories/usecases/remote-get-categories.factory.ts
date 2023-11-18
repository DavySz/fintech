import { RemoteGetCategories } from "../../../data/usecases";
import {
    GetCategoriesCase,
    GetCategoriesSpace,
} from "../../../domain/usecases";
import { makeAxiosHttpClientAdapter } from "../http";

export const makeRemoteGetCategories = (): GetCategoriesCase => {
    const url = String(process.env.BFF_URL);

    const axiosHttpClientAdapter =
        makeAxiosHttpClientAdapter<GetCategoriesSpace.Model[]>();

    const remoteGetCategories = new RemoteGetCategories(
        axiosHttpClientAdapter,
        url
    );

    return remoteGetCategories;
};
