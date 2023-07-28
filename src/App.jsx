import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainLayout from "./layouts/MainLayout.jsx/MainLayout";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/AuthenticationPage/Login/Login";
import Logout from "./pages/AuthenticationPage/Logout/Logout";
import DetailPage from "./pages/DetailPage/DetailPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import Register from "./pages/AuthenticationPage/Register/Register";
import AccountSettingsPage from "./pages/AccountSettingsPage/AccountSettingsPage";
import { message } from "antd";
import AddMovieAdminPage from "./pages/AddMovieAdminPage/AddMovieAdminPage";
import ListMovieAdminPage from "./pages/ListMovieAdminPage/ListMovieAdminPage";
import EditMovieAdminPage from "./pages/EditMovieAdminPage/EditMovieAdminPage";
import Loading from "./components/Loading.jsx/Loading";
export let navigate = null;
export let success = null;
export let error = null;
export let warning = null;
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	navigate = useNavigate();
	const [messageApi, contextHolder] = message.useMessage();
	success = (content) => {
		messageApi.open({
			type: "success",
			content,
		});
	};
	error = (content) => {
		messageApi.open({
			type: "error",
			content,
		});
	};
	warning = (content) => {
		messageApi.open({
			type: "warning",
			content,
		});
	};
	return (
		<>
			<Loading />
			{contextHolder}
			<Routes>
				{/* LANDING LAYOUT */}
				<Route element={<MainLayout />}>
					<Route index element={<LandingPage />} />

					<Route path="detail/:id" element={<DetailPage />} />

					<Route path="checkout/:id" element={<CheckoutPage />} />

					<Route path="history" element={<HistoryPage />} />

					<Route path="account-settings" element={<AccountSettingsPage />} />

					<Route path="register" element={<AuthenticationPage />}>
						<Route index element={<Register />} />
					</Route>

					<Route path="login" element={<AuthenticationPage />}>
						<Route index element={<Login />} />
					</Route>

					<Route path="logout" element={<AuthenticationPage />}>
						<Route index element={<Logout />} />
					</Route>

					{/* ADMIN */}
					<Route path="list-movie" element={<ListMovieAdminPage />} />

					<Route path="add-movie" element={<AddMovieAdminPage />} />

					<Route path="edit-movie/:id" element={<EditMovieAdminPage />} />

					<Route path="home" element={<HomePage />} />
				</Route>

				{/* USER LAYOUT */}
				{/* <Route element={<UserLayout />}>
				<Route path="login" element={<Login />} />
				<Route path="signin" element={<SignIn />} />
			</Route> */}

				{/* OTHER */}
				<Route path="*" element={<Navigate to={"/"} />} />
			</Routes>
		</>
	);
}
export default App;
