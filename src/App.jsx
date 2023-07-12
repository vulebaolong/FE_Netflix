import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainLayout from "./layouts/MainLayout.jsx/MainLayout";

function App() {
	return (
		<Routes>
			{/* LANDING LAYOUT */}
			<Route element={<MainLayout />}>
				<Route index element={<LandingPage />} />
			</Route>

			{/* USER LAYOUT */}
			{/* <Route element={<UserLayout />}>
				<Route path="login" element={<Login />} />
				<Route path="signin" element={<SignIn />} />
			</Route> */}

			{/* OTHER */}
			<Route path="*" element={<Navigate to={"/"} />} />
		</Routes>
	);
}
export default App;