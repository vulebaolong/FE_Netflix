import { useEffect } from "react";
import Banner from "./Banner/Banner";
import Children from "./Children/Children";
import Download from "./Download/Download";
import EveryWhere from "./EveryWhere/EveryWhere";
import Faq from "./Faq/Faq";
import Tv from "./Tv/Tv";
import { checkUser } from "../../helpers/userHelper";
import { navigate } from "../../App";

function LandingPage() {
	useEffect(() => {
		if (checkUser()) navigate("/home");
	}, []);
	return (
		<div className="divide-y-8 divide-[#232323]">
			<Banner />
			<Tv />
			<Download />
			<EveryWhere />
			<Children />
			<Faq />
			<div className=""></div>
		</div>
	);
}
export default LandingPage;
