import { RemoteGetCategories } from "../../../data/usecases";
import {
    GetCategoriesCase,
    GetCategoriesSpace,
} from "../../../domain/usecases";
import { makeAxiosHttpClientAdapter } from "../http";

export const makeRemoteGetCategories = (): GetCategoriesCase => {
    const url = `${process.env.BFF_URL}/transactions`;

    const axiosHttpClientAdapter =
        makeAxiosHttpClientAdapter<GetCategoriesSpace.Model[]>();

    const remoteGetCategories = new RemoteGetCategories(
        axiosHttpClientAdapter,
        url
    );

    return remoteGetCategories;
};
