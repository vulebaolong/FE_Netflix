import { Outlet } from "react-router-dom";
import Header from "./../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackgroundAuth from "./../../pages/AuthenticationPage/BackgroundAuth/BackgroundAuth";
import ModalMovie from "../../pages/HomePage/ListMovie.jsx/ModalMovie";
import BackgroundLogout from "../../pages/AuthenticationPage/BackgroundLogout/BackgroundLogout";

function MainLayout() {
	const { pathname } = useLocation();
	console.log(pathname);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const isBackgroundAuth = () => {
		if (pathname === "/login" || pathname === "/register") return true;
		return false;
	};

	const renderBackgroundAuth = () => {
		if (pathname === "/login" || pathname === "/register") return <BackgroundAuth />;
		if (pathname === "/logout") return <BackgroundLogout />;
	};

	return (
		<div className="relative overflow-hidden">
			{renderBackgroundAuth()}
			<Header />
			<Outlet />
			<Footer />
			<div className="modal absolute top-0 left-0 z-50">
				<ModalMovie />
			</div>
		</div>
	);
}
export default MainLayout;
