import { Outlet } from "react-router-dom";
import Header from "./../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackgroundAuth from "./../../pages/AuthenticationPage/BackgroundAuth/BackgroundAuth";


function MainLayout() {
	const { pathname } = useLocation();
	console.log(pathname);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const isBackgroundAuth = () => {
		if (pathname === "/login" || pathname === "/signup") return true
		return  false;
	};

	return (
		<div className="relative">
			{isBackgroundAuth() && <BackgroundAuth />}
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
export default MainLayout;
