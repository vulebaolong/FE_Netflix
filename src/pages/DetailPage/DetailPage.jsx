import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DetailBanner from "./DetailBanner/DetailBanner";
import DetailTab from "./DetailTab/DetailTab";
import { getMovieDetailMID } from "../../redux/slices/detailSlice";
import Comment from "./Comment/Comment";
import Divide from "./../../components/Divide/Divide";

function DetailPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMovieDetailMID(id));
	}, [id, dispatch]);
	return (
		<div className="bg-backgroundHome">
			<DetailBanner />
			<DetailTab />
			<Comment />
		</div>
	);
}
export default DetailPage;
