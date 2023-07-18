import SwiperComponent from "./SwiperComponent";
import Title from "./Title";

function ListMovie() {
	return (
		<section className="listMovie relative space-y-[3vw] pb-24 ">
			<div className="item">
				{/* TITLE */}
				<Title>Chương trình truyền hình Âu - Mỹ</Title>
				{/* SWIPER */}
				<SwiperComponent />
			</div>
			<div className="item">
				{/* TITLE */}
				<Title>Chương trình truyền hình Âu - Mỹ</Title>
				{/* SWIPER */}
				<SwiperComponent />
			</div>
			<div className="item">
				{/* TITLE */}
				<Title>Chương trình truyền hình Âu - Mỹ</Title>
				{/* SWIPER */}
				<SwiperComponent />
			</div>
		</section>
	);
}
export default ListMovie;
