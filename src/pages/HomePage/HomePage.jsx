import { useEffect } from "react";
import Banner from "./Banner.jsx/Banner";
import ListMovie from "./ListMovie.jsx/ListMovie";
import { useDispatch, useSelector } from "react-redux";
import { getListMovieMID } from "../../redux/slices/movieSlice";
import Cinema from "./Cinema/Cinema";
import Devices from "./Devices/Devices";
import Divide from "../../components/Divide/Divide";
import { setPlayingBannerREDU } from "../../redux/slices/bannerHomeSlice";
import Media from "./Media/Media";

function HomePage() {
	const dispatch = useDispatch();
	const { listMovie } = useSelector((state) => state.movieSlice);

	useEffect(() => {
		dispatch(getListMovieMID());
		dispatch(setPlayingBannerREDU(true));
	}, []);

	return (
		<main className="bg-backgroundHome">
			<Banner listMovie={listMovie} />
			<ListMovie />
			<Divide />
			<Cinema />
			<Divide />
			<Devices />
			<Divide />
			<Media />
		</main>
	);
}
export default HomePage;
