import { EmailValidator } from "../../../validation/fields";
import { FieldValidatorProtocol } from "../../../validation/protocols";

export const makeEmailValidator = (): FieldValidatorProtocol => {
    const emailValidator = new EmailValidator();
    return emailValidator;
};
