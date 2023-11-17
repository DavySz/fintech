import { Encrypt } from "../../../../data/crypto";
import { CryptoEncryptAdapter } from "../../../../infra/crypto";

export const makeCryptoEncryptAdapter = (): Encrypt => {
    return new CryptoEncryptAdapter();
};
