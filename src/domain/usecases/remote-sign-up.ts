import { SignUpDTO } from "./../dtos/sign-up-dto";

export namespace SignUpSpace {
    export interface Params extends SignUpDTO {}
}

export interface SignUpCase {
    signUp: (params: SignUpSpace.Params) => Promise<void>;
}
