import "./App.css";
import { ConfigProvider, } from "antd";
import { RouterProvider } from "react-router-dom";
import { theme } from 'antd'
import customTheme from './antd.theme.json'
import router from "./routes";
import { useEffect, useState } from "react";

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
		>
			<RouterProvider router={router} />
		</ConfigProvider>
	);
}

export default App;
