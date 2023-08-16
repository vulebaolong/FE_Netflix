import { useEffect } from "react";
import Banner from "./Banner.jsx/Banner";
import ListMovie from "./ListMovie.jsx/ListMovie";
import { useDispatch, useSelector } from "react-redux";
import { getListMovieMID } from "../../redux/slices/movieSlice";
import Cinema from "./Cinema/Cinema";
import Devices from "./Devices/Devices";
import Divide from "../../components/Divide/Divide";
import Media from "./Media/Media";
import { navigate } from "../../App";

function HomePage() {
	const { userLogin } = useSelector((state) => state.userSlices);

	useEffect(() => {
		if (userLogin === null) navigate("/");
	}, []);
	const dispatch = useDispatch();

	const hideModal = async () => {
		const modalMovieEl = document.querySelector(".modalMovie");
		console.log(modalMovieEl);
		if (modalMovieEl) {
			modalMovieEl.style.display = "none";
		}
	};

	useEffect(() => {
		dispatch(getListMovieMID());
		return () => {
			hideModal();
		};
	}, []);

	return (
		<main className="bg-backgroundHome">
			<Banner />
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
