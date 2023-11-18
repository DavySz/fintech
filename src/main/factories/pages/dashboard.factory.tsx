import { Dashboard } from "../../../presentation/pages/dashboard/dashboard";
import {
    makeRemoteCreateTransaction,
    makeRemoteGetConciliation,
    makeRemoteGetTransactions,
} from "../usecases";

export const makeDashboardPage = () => {
    return (
        <Dashboard
            remoteCreateTransaction={makeRemoteCreateTransaction()}
            remoteGetTransactions={makeRemoteGetTransactions()}
            remoteGetConciliation={makeRemoteGetConciliation()}
        />
    );
};
