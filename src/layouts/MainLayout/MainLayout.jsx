import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function MainLayout() {
	const location = useLocation();
	const path = location.pathname; // "/login"
	console.log("🏊🏼‍♀️ 👙 MainLayout 👙 path:", path);

	const renderBg = () => {
		let jsx = <></>;
		if (path === "/login") {
			jsx = (
				<div className="absolute -z-[1] top-0 left-0 w-full h-full ">
					<img
						className="w-full h-full"
						src="https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/644d413c-ef76-49e0-83e9-d4693e0ecc66/VN-vi-20230717-popsignuptwoweeks-perspective_alpha_website_small.jpg"
						srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/644d413c-ef76-49e0-83e9-d4693e0ecc66/VN-vi-20230717-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/644d413c-ef76-49e0-83e9-d4693e0ecc66/VN-vi-20230717-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/644d413c-ef76-49e0-83e9-d4693e0ecc66/VN-vi-20230717-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
					/>
					<div
						className="absolute top-0 left-0 bottom-0 right-0 bg-black/40"
						style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)" }}
					></div>
				</div>
			);
		}
		return jsx;
	};

	return (
		<div className="relative overflow-hidden">
			{renderBg()}
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default MainLayout;
