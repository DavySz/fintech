import { Dashboard } from "../pages/dashboard/dashboard";
import { SignIn } from "../pages/sign-in/sign-in";
import { SignUp } from "../pages/sign-up/sign-up";

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
