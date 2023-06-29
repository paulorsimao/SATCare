import "./App.css";
import { ConfigProvider, } from "antd";
import { theme } from 'antd'
import customTheme from './antd.theme.json'
import { useEffect, useState } from "react";
import { AuthContextProvider } from "./features/auth/providers/auth-context";
import Router from "./routes";
import locale from "antd/locale/pt_BR";

function App() {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

        mediaQueryList.onchange = (e: MediaQueryListEvent) => {
            setDarkMode(e.matches);
        };

        return () => {
            mediaQueryList.onchange = () => { };
        };
    }, []);

    return (
        <ConfigProvider
            theme={{
                algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
                ...customTheme
            }}
            locale={locale}
        >
            <AuthContextProvider >
                <Router />
            </AuthContextProvider>
        </ConfigProvider>
    );
}

export default App;
