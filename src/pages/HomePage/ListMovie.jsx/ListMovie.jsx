import { useSelector } from "react-redux";
import Slider from "./Slider";
import Title from "./Title";

function ListMovie() {
	const { listMovie } = useSelector((state) => state.movieSlice);
	const phimDangChieu = listMovie.filter((film) => {
		if (film.dangChieu) return true;
	});
	const phimSapChieu = listMovie.filter((film) => {
		if (film.sapChieu) return true;
	});
	return (
		<section className="listMovie relative space-y-[3vw] pb-24 ">
			<div className="item">
				{/* TITLE */}
				<Title>Tất cả phim</Title>
				{/* SWIPER */}
				<Slider listMovie={listMovie}/>
			</div>
			<div className="item">
				{/* TITLE */}
				<Title>Phim đang chiếu</Title>
				{/* SWIPER */}
				<Slider listMovie={phimDangChieu}/>
			</div>
			<div className="item">
				{/* TITLE */}
				<Title>Phim sắp chiếu</Title>
				{/* SWIPER */}
				<Slider listMovie={phimSapChieu}/>
			</div>
		</section>
	);
}
export default ListMovie;
