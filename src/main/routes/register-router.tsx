import { Dashboard } from "../../presentation/pages/dashboard/dashboard";
import { makeSignInPage, makeSignUpPage } from "../factories/pages";

export const applicationRoutes = [
    {
        element: makeSignInPage(),
        path: "/",
        key: "/sign-in",
    },
    {
        element: makeSignUpPage(),
        path: "/sign-up",
        key: "/sign-up",
    },
    {
        element: <Dashboard />,
        path: "/dashboard",
        key: "/dashboard",
    },
];
