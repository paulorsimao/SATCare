import "./App.css";
import { ConfigProvider, } from "antd";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import withAdminLayout from "./layouts/admin-layout/withAdminLayout";
import cadastro from "./features/usuarios/components/cadastro-usuarios/cadastro";

function App() {
	return (
		<ConfigProvider>
			<Router>
				<Routes>
					<Route path='/' Component={() => withAdminLayout('Home')} />
					<Route path='/home' Component={() => withAdminLayout('Home')} />
					<Route path='/usuarios' Component={() => withAdminLayout('Usuários')} />
					<Route path='/profissionais' Component={() => withAdminLayout('Profissionais')} />
					<Route path='/cadastro' Component={cadastro} />
				</Routes>
			</Router>
		</ConfigProvider>
	);
}

export default App;
