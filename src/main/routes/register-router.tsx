import {
    makeSignInPage,
    makeSignUpPage,
    makeDashboardPage,
} from "../factories/pages";

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
        element: makeDashboardPage(),
        path: "/dashboard",
        key: "/dashboard",
    },
];
