import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovieShowtimeMID } from "../../redux/slices/cinemaSlice";
import DetailBanner from "./DetailBanner/DetailBanner";
import DetailTab from "./DetailTab/DetailTab";

function DetailPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMovieShowtimeMID(id));
	}, [id, dispatch]);
	return (
		<div className="bg-backgroundHome">
			<DetailBanner />
			<DetailTab />
			<section className="w-full h-[500px] bg-backgroundHome"></section>
		</div>
	);
}
export default DetailPage;
