import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "antd/dist/reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import "./api/apiConfig.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
const isProduction = import.meta.env.PROD;
if (isProduction) {
	console.log = () => {};
	console.error = () => {};
	console.debug = () => {};
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<ConfigProvider
		theme={{
			algorithm: theme.darkAlgorithm,
		}}
	>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</ConfigProvider>,
);
