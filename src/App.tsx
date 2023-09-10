import { type ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./presentation/themes/themes";
import { ApplicationRoutes } from "./main/routes/routes";

function App(): ReactNode {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ApplicationRoutes />
        </ThemeProvider>
    );
}

export default App;
