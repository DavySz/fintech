import { Dispatch, SetStateAction } from "react";
import { SignInCase } from "../../../domain/usecases";

export type ICallback = Dispatch<SetStateAction<string>>;
export type IEvent = React.ChangeEvent<HTMLInputElement>;

export interface ISignIn {
    remoteSignIn: SignInCase;
}
