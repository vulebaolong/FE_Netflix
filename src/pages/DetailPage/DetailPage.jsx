import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DetailBanner from "./DetailBanner/DetailBanner";
import DetailTab from "./DetailTab/DetailTab";
import { getMovieDetailMID } from "../../redux/slices/detailSlice";
import Comment from "./Comment/Comment";
import { navigate } from "../../App";

function DetailPage() {
	const { userLogin } = useSelector((state) => state.userSlices);

	useEffect(() => {
		if (userLogin === null) navigate("/");
	}, []);

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
