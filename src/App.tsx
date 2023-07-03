import { type ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { SignIn } from "./presentation/pages/sign-in/sign-in";
import { defaultTheme } from "./presentation/themes/themes";

function App(): ReactNode {
    return (
        <ThemeProvider theme={defaultTheme}>
            <SignIn />
        </ThemeProvider>
    );
}

export default App;
