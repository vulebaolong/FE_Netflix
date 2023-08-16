import { Outlet } from "react-router-dom";
import Header from "./../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ModalMovie from "../../pages/HomePage/ListMovie.jsx/ModalMovie";
import BackgroundImg from "../../components/BackgroundImg/BackgroundImg";
import imgLogout from "../../assets/imgBackground/logout_1500x1000.jpg";
import imgLogin from "../../assets/imgBackground/VN_vi_website_large.jpg";
import imgAccount from "../../assets/imgBackground/netflix_4.jpg";
import imgHistory from "../../assets/imgBackground/netflix_3.jpg";
import imgCheckout from "../../assets/imgBackground/background-texture.jpg";
import imgListMovie from "../../assets/imgBackground/netflix_1.jpg";
import imgAddMovie from "../../assets/imgBackground/netflix_2.jpg";
import imgEditMovie from "../../assets/imgBackground/netflix_5.jpg";
import { useSelector } from "react-redux";
import { navigate } from "../../App";

function MainLayout() {
	const { pathname } = useLocation();
	const path = pathname.split("/")[1];
	console.log(pathname.split("/")[1]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const renderBackgroundAuth = () => {
		if (path === "login" || path === "register") return <BackgroundImg img={imgLogin} filter />;
		if (path === "logout") return <BackgroundImg img={imgLogout} />;
		if (path === "account-settings") return <BackgroundImg img={imgAccount} filter />;
		if (path === "history") return <BackgroundImg img={imgHistory} filter />;
		if (path === "checkout") return <BackgroundImg img={imgCheckout} />;
		if (path === "list-movie") return <BackgroundImg img={imgListMovie} filter />;
		if (path === "add-movie") return <BackgroundImg img={imgAddMovie} filter />;
		if (path === "edit-movie") return <BackgroundImg img={imgEditMovie} filter />;
		if (path === "show-time") return <BackgroundImg img={imgEditMovie} filter />;
	};

	


	return (
		<div className="relative overflow-hidden">
			{renderBackgroundAuth()}
			<div className="relative">
				<Header />
				<Outlet />
				<Footer />
				<div className="modal absolute top-0 left-0 z-50">
					<ModalMovie />
				</div>
			</div>
		</div>
	);
}
export default MainLayout;
