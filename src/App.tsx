import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import logo from "/logo.jpg";
import "./App.css";

function App() {
	return (
		<>
			<div>
				{/* <a href="https://vitejs.dev" target="_blank"> */}
				<img src={logo} style={{ width: '40vh', height: 'auto', borderRadius: '50px' }} className="logo" alt="Vite logo" />
				{/* </a> */}
			</div>
		</>
	);
}

export default App;
