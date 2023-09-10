import { Dashboard } from "../../presentation/pages/dashboard/dashboard";
import { SignIn } from "../../presentation/pages/sign-in/sign-in";
import { SignUp } from "../../presentation/pages/sign-up/sign-up";

export const applicationRoutes = [
    {
        element: <SignIn />,
        path: "/",
        key: "/sign-in",
    },
    {
        element: <SignUp />,
        path: "/sign-up",
        key: "/sign-up",
    },
    {
        element: <Dashboard />,
        path: "/dashboard",
        key: "/dashboard",
    },
];
