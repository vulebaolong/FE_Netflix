import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
	return (
		<div>
			<>
				<Routes>
					<Route element={<MainLayout />}>
						<Route index element={<LandingPage />} />
						<Route path="login" element={<LoginPage />} />
					</Route>

					{/* <Route element={<UserLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
        </Route> */}

					{/* OTHER */}
					<Route path="*" element={<Navigate to={"/"} />} />
				</Routes>
			</>
		</div>
	);
}
export default App;
