import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function ApiLayout() {
	return (
		<div className="antialiased relative dark:bg-slate-900">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
export default ApiLayout;
