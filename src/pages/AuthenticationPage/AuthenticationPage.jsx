import { Outlet } from "react-router-dom";

function AuthenticationPage() {
	return (
		<section className="py-16">
			<div className="container flex justify-center overflow-hidde pt-height-header">
				<div className="p-16 bg-black/70 max-w-md w-full rounded-2xl" >
					<Outlet />
				</div>
			</div>
		</section>
	);
}
export default AuthenticationPage;

// 899 + height footer
