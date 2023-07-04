import { type ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./presentation/themes/themes";
import { SignUp } from "./presentation/pages/sign-up/sign-up";

function App(): ReactNode {
    return (
        <ThemeProvider theme={defaultTheme}>
            <SignUp />
        </ThemeProvider>
    );
}

export default App;
