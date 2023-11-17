import { Dispatch, SetStateAction } from "react";
import { FieldValidatorProtocol } from "../../../validation/protocols";
import { SignUpCase } from "../../../domain/usecases/remote-sign-up";

export type ICallback = Dispatch<SetStateAction<string>>;
export type IEvent = React.ChangeEvent<HTMLInputElement>;

export interface ISignUp {
    remoteSignUp: SignUpCase;
    emailValidator: FieldValidatorProtocol;
    passwordValidator: FieldValidatorProtocol;
}
