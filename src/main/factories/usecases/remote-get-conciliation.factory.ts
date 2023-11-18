import { RemoteGetConciliation } from "../../../data/usecases";
import {
    GetConciliationCase,
    GetConciliationSpace,
} from "../../../domain/usecases";
import { makeAxiosHttpClientAdapter } from "../http";

export const makeRemoteGetConciliation = (): GetConciliationCase => {
    const url = String(process.env.BFF_URL);

    const axiosHttpClientAdapter =
        makeAxiosHttpClientAdapter<GetConciliationSpace.Model[]>();

    const remoteGetConciliation = new RemoteGetConciliation(
        axiosHttpClientAdapter,
        url
    );

    return remoteGetConciliation;
};
