import { useEffect } from "react";
import Banner from "./Banner.jsx/Banner";
import ListMovie from "./ListMovie.jsx/ListMovie";
import { useDispatch, useSelector } from "react-redux";
import { getListMovieMID } from "../../redux/slices/movieSlice";
import Cinema from "./Cinema/Cinema";
import Devices from "./Devices/Devices";

function HomePage() {
	const dispatch = useDispatch();
	const { listMovie } = useSelector((state) => state.movieSlice);

	useEffect(() => {
		dispatch(getListMovieMID());
	}, []);

	return (
		<main className="bg-backgroundHome">
			<Banner listMovie={listMovie} />
			<ListMovie />
			<Cinema />
			<Devices />
		</main>
	);
}
export default HomePage;
