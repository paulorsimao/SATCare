import "./App.css";
import { ConfigProvider, theme } from "antd";
import themeOptions from './antd.theme.json'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import withAdminLayout from "./layouts/admin-layout/withAdminLayout";

function App() {
	return (
		<ConfigProvider theme={{
			...themeOptions,
			algorithm: theme.darkAlgorithm,
		}}>
			<Router>
				<Routes>
					<Route path='/' Component={() => withAdminLayout('Home')} />
					<Route path='/home' Component={() => withAdminLayout('Home')} />
					<Route path='/usuarios' Component={() => withAdminLayout('Usuários')} />
					<Route path='/profissionais' Component={() => withAdminLayout('Profissionais')} />
				</Routes>
			</Router>
		</ConfigProvider>
	);
}

export default App;
