import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/sign-in/sign-in";
import { applicationRoutes } from "./register-router";

export const ApplicationRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {applicationRoutes.map((route) => {
                    return (
                        <Route
                            element={route.element}
                            path={route.path}
                            key={route.key}
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
};
