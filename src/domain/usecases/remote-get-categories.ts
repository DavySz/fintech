import { CategoryModel } from "../models";

export namespace GetCategoriesSpace {
    export interface Model extends CategoryModel {}
}

export interface GetCategoriesCase {
    get: () => Promise<GetCategoriesSpace.Model[]>;
}
