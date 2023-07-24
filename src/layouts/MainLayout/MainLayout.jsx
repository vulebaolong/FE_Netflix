import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function MainLayout() {
	return (
		<div className="relative overflow-hidden">
			{/* background  */}
			<div className="absolute -z-[1] top-0 left-0 w-full h-full ">
				<img
					className="w-full h-full"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/644d413c-ef76-49e0-83e9-d4693e0ecc66/VN-vi-20230717-popsignuptwoweeks-perspective_alpha_website_small.jpg"
					srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/644d413c-ef76-49e0-83e9-d4693e0ecc66/VN-vi-20230717-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/644d413c-ef76-49e0-83e9-d4693e0ecc66/VN-vi-20230717-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/644d413c-ef76-49e0-83e9-d4693e0ecc66/VN-vi-20230717-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
					alt
				/>
			</div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default MainLayout;
