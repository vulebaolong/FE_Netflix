import { useSelector } from "react-redux";
import Title from "./Title";


import SliderDesktop from "./SliderDesktop";
import SliderMobile from "./SliderMobile";

function ListMovie() {
	const { listMovie } = useSelector((state) => state.movieSlice);
	const phimDangChieu = listMovie.filter((film) => {
		if (film.dangChieu) return true;
	});
	const phimSapChieu = listMovie.filter((film) => {
		if (film.sapChieu) return true;
	});
	return (
		<section
			className="listMovie relative  lg:pb-24 lg:pt-0
			pt-header 
			sm:pt-header_sm
			md:pt-header_md
		"
		>
			{/* DESKTOP */}
			<div className="space-y-[3vw] hidden lg:block">
				<div className="item">
					{/* TITLE */}
					<Title>Tất cả phim</Title>
					{/* SWIPER */}
					<SliderDesktop listMovie={listMovie} />
				</div>
				<div className="item">
					{/* TITLE */}
					<Title>Phim đang chiếu</Title>
					{/* SWIPER */}
					<SliderDesktop listMovie={phimDangChieu} />
				</div>
				<div className="item">
					{/* TITLE */}
					<Title>Phim sắp chiếu</Title>
					{/* SWIPER */}
					<SliderDesktop listMovie={phimSapChieu} />
				</div>
			</div>

			{/* MOBILE */}
			<div className=" block lg:hidden container py-24">
				<SliderMobile listMovie={listMovie}/>
			</div>
		</section>
	);
}
export default ListMovie;
