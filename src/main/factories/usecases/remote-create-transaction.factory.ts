import { RemoteCreateTransaction } from "../../../data/usecases";
import { CreateTransactionCase } from "../../../domain/usecases";
import { makeAxiosHttpClientAdapter } from "../http";

export const makeRemoteCreateTransaction = (): CreateTransactionCase => {
    const url = String(process.env.BFF_URL);

    const axiosHttpClientAdapter = makeAxiosHttpClientAdapter<void>();

    const remoteCreateTransaction = new RemoteCreateTransaction(
        axiosHttpClientAdapter,
        url
    );

    return remoteCreateTransaction;
};
