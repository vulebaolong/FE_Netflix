import React from "react";
import Banner from "./Banner/Banner";
import Tv from "./Tv/Tv";
import DownLoad from "./DownLoad/DownLoad";
import EveryWhere from "./EveryWhere/EveryWhere";
import Kids from "./Kids/Kids";
import Question from "./Question/Question";

function LandingPage() {
	return (
		<>
			<div className="divide-y-8 divide-[rgb(35,35,35)]">
				<section>
					<Banner />
				</section>
				<section className="py-[4.5rem]">
					<Tv />
				</section>
				<section className="py-[4.5rem]">
					<DownLoad />
				</section>
				<section className="py-[4.5rem]">
					<EveryWhere />
				</section>
				<section className="py-[4.5rem]">
					<Kids />
				</section>
				<section className="py-[4.5rem]">
					<Question />
				</section>
				<div></div>
			</div>
		</>
	);
}

export default LandingPage;
