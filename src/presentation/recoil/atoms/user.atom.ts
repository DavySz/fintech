import { RecoilState, atom } from "recoil";
import { UserModel } from "../../../domain/models";

export const userState: RecoilState<UserModel> = atom({
    key: "userState",
    default: {
        name: "",
        email: "",
        user_id: "",
        password: "",
        created_at: "",
    },
});
