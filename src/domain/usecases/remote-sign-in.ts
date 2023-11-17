import { SignInDTO } from "../dtos";
import { UserModel } from "../models";

export namespace SignInSpace {
    export interface Params extends SignInDTO {}
    export interface Model extends UserModel {}
}

export interface SignInCase {
    signIn: (params: SignInSpace.Params) => Promise<SignInSpace.Model>;
}
