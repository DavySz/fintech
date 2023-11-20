import { useRecoilState } from "recoil";
import { RemoteGetConciliation } from "../../../data/usecases";
import {
    GetConciliationCase,
    GetConciliationSpace,
} from "../../../domain/usecases";
import { makeAxiosHttpClientAdapter } from "../http";
import { userState } from "../../../presentation/recoil/atoms/user.atom";

export const makeRemoteGetConciliation = (): GetConciliationCase => {
    const [user, _] = useRecoilState(userState);

    const url = `${process.env.BFF_URL}/conciliation/${user.user_id}`;

    const axiosHttpClientAdapter =
        makeAxiosHttpClientAdapter<GetConciliationSpace.Model[]>();

    const remoteGetConciliation = new RemoteGetConciliation(
        axiosHttpClientAdapter,
        url
    );

    return remoteGetConciliation;
};
