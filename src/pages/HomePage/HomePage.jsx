import Button from "./../../components/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { userApi } from "../../api/userApi";
import Banner from "./Banner.jsx/Banner";

function HomePage() {
	const [listMovie, setListMovie] = useState([]);


	useEffect(() => {
		axios.get(userApi.getListMoive).then((result) => {
			const { data } = result;
			setListMovie(data.content);
		});
	}, []);


	return (
		<main className="bg-backgroundHome">
			<Banner listMovie={listMovie} />

			<section className="bg-backgroundHome w-full relative h-96 z-[1]">
				<Button className="relative z-0" type="primary" size="big">
					play
				</Button>
			</section>
			<section className="bg-blue-400/50 w-full relative h-96">
				<Button className="relative z-0" type="primary" size="big">
					play
				</Button>
			</section>
		</main>
	);
}
export default HomePage;
