import { ConciliationModel } from "./../models/conciliation-model";

export namespace GetConciliationSpace {
    export interface Model extends ConciliationModel {}
}

export interface GetConciliationCase {
    get: () => Promise<GetConciliationSpace.Model[]>;
}
