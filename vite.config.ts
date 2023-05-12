import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default function({ command, mode }) {
	const env = loadEnv(mode, process.cwd(), "");

	return defineConfig({
		server: {
			port: +env.VITE_PORT
		},
		plugins: [react()],
	})
}