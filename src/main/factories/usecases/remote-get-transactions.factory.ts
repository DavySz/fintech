import { RemoteGetTransactions } from "../../../data/usecases";
import {
    GetTransactionsCase,
    GetTransactionsSpace,
} from "../../../domain/usecases";

import { makeAxiosHttpClientAdapter } from "../http";

export const makeRemoteGetTransactions = (): GetTransactionsCase => {
    const url = String(process.env.BFF_URL);

    const axiosHttpClientAdapter =
        makeAxiosHttpClientAdapter<GetTransactionsSpace.Model[]>();

    const remoteGetTransactions = new RemoteGetTransactions(
        axiosHttpClientAdapter,
        url
    );

    return remoteGetTransactions;
};
