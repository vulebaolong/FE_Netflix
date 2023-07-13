import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
	return (
		<div>
			<>
				<Routes>
					<Route element={<MainLayout />}>
						<Route index element={<LandingPage />} />
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
