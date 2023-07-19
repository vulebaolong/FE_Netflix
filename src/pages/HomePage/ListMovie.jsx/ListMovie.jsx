import Slider from "./Slider";
import Title from "./Title";

function ListMovie() {
	return (
		<section className="listMovie relative space-y-[3vw] pb-24 ">
			<div className="item">
				{/* TITLE */}
				<Title>Chương trình truyền hình Âu - Mỹ</Title>
				{/* SWIPER */}
				<Slider />
			</div>
			<div className="item">
				{/* TITLE */}
				<Title>Chương trình truyền hình Âu - Mỹ</Title>
				{/* SWIPER */}
				<Slider />
			</div>
			<div className="item">
				{/* TITLE */}
				<Title>Chương trình truyền hình Âu - Mỹ</Title>
				{/* SWIPER */}
				<Slider />
			</div>
		</section>
	);
}
export default ListMovie;
