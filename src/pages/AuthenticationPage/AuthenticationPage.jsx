import { Outlet } from "react-router-dom";

function AuthenticationPage() {
	return (
		<section className="py-16">
			<div className="container flex justify-center overflow-hidde pt-height-header">
				<div
					className=" bg-black/70 max-w-md w-full rounded-2xl
					p-9
					sm:p-12
					lg:p-14
					2xl:p-16
					"
				>
					<Outlet />
				</div>
			</div>
		</section>
	);
}
export default AuthenticationPage;

// 899 + height footer
