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
export let navigate = null;

function App() {
	navigate = useNavigate();
	return (
		<>
			<Routes>
				{/* LANDING LAYOUT */}
				<Route element={<MainLayout />}>
					<Route index element={<LandingPage />} />

					<Route path="detail/:id" element={<DetailPage />} />

					<Route path="checkout/:id" element={<CheckoutPage />} />

					<Route path="history" element={<HistoryPage />} />

					<Route path="register" element={<AuthenticationPage />}>
						<Route index element={<Register />} />
					</Route>

					<Route path="login" element={<AuthenticationPage />}>
						<Route index element={<Login />} />
					</Route>

					<Route path="logout" element={<AuthenticationPage />}>
						<Route index element={<Logout />} />
					</Route>

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
