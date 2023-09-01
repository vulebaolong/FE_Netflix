import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ConfigProvider
		theme={{
			algorithm: theme.darkAlgorithm,
		}}
	>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ConfigProvider>,
);
