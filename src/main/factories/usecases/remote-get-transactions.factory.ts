import { useRecoilState } from "recoil";
import { RemoteGetTransactions } from "../../../data/usecases";
import {
    GetTransactionsCase,
    GetTransactionsSpace,
} from "../../../domain/usecases";

import { makeAxiosHttpClientAdapter } from "../http";
import { userState } from "../../../presentation/recoil/atoms/user.atom";

export const makeRemoteGetTransactions = (): GetTransactionsCase => {
    const [user, _] = useRecoilState(userState);

    const url = `${process.env.BFF_URL}/transactions/user/${user.user_id}`;

    const axiosHttpClientAdapter =
        makeAxiosHttpClientAdapter<GetTransactionsSpace.Model[]>();

    const remoteGetTransactions = new RemoteGetTransactions(
        axiosHttpClientAdapter,
        url
    );

    return remoteGetTransactions;
};
