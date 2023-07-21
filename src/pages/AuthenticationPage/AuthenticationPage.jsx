import { Outlet } from "react-router-dom";
import { checkUser } from "../../helpers/userHelper";
import { navigate } from "../../App";
import { useEffect } from "react";

function AuthenticationPage() {
	useEffect(() => {
		if (checkUser()) navigate("/home");
	}, []);

	return (
		<>
			<div
				className="
				pt-header
				sm:pt-header_sm
				md:pt-header_md
				lg:pt-header_lg
				xl:pt-header_xl
				2xl:pt-header_2xl
				"
			></div>
			<section className=" py-16">
				<div className={`container flex justify-center overflow-hidde`}>
					<Outlet />
				</div>
			</section>
		</>
	);
}
export default AuthenticationPage;

// 899 + height footer
