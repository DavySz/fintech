import { PasswordValidator } from "../../../validation/fields";
import { FieldValidatorProtocol } from "../../../validation/protocols";

export const makePasswordValidator = (): FieldValidatorProtocol => {
    const passwordValidator = new PasswordValidator();
    return passwordValidator;
};
