import Button from "./../../components/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { userApi } from "../../api/userApi";
import Banner from "./Banner.jsx/Banner";
import ListMovie from "./ListMovie.jsx/ListMovie";

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
			<ListMovie />

			<section className="bg-backgroundHome w-full relative h-96 ">
				<Button type="primary" size="big">
					play
				</Button>
			</section>
			<section className="bg-blue-400/50 w-full relative h-96">
				<Button  type="primary" size="big">
					play
				</Button>
			</section>
		</main>
	);
}
export default HomePage;
