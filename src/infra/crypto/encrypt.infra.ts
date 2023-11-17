import CryptoJS from "crypto-js";
import { Encrypt } from "../../data/crypto";

export class CryptoEncryptAdapter implements Encrypt {
    encrypt(value: string, key: string): string {
        const data = CryptoJS.AES.encrypt(
            JSON.stringify(value),
            key
        ).toString();
        return data;
    }
}
