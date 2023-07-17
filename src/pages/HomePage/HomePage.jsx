import Button from "./../../components/Button/Button";
import { useEffect } from "react";
import Banner from "./Banner.jsx/Banner";
import ListMovie from "./ListMovie.jsx/ListMovie";
import { useDispatch, useSelector } from "react-redux";
import { getListMovieMID } from "../../redux/slices/movieSlice";

function HomePage() {
	const dispatch = useDispatch()
	const { listMovie } = useSelector(state => state.movieSlice)

	useEffect(() => {
		dispatch(getListMovieMID())
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
