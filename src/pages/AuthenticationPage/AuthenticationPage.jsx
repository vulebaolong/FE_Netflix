import { Outlet } from "react-router-dom";

function AuthenticationPage() {
	return (
		<>
			<div className="pt-height-header"></div>
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
