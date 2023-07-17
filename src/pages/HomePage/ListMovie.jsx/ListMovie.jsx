import { FaAngleRight } from "react-icons/fa6";
import SwiperComponent from "./Swiper/SwiperComponent";

function ListMovie() {
	return (
		<section className="listMovie relative space-y-[3vw]">
			<div className="item">
				{/* TITLE */}
				<div className="container-home mb-[1em]">
					<div className=" flex items-end group/title w-fit cursor-pointer">
						<h2 className="text-2xl font-medium text-[#e5e5e5] group-hover/title:text-[#fff] transition">Chương trình truyền hình Âu - Mỹ</h2>
						<div className=" flex items-center text-[#54b9c5] ">
							<div
								className="font-semibold max-w-0 opacity-0 whitespace-nowrap
								group-hover/title:translate-x-[15px]
								group-hover/title:max-w-[200px]
								group-hover/title:opacity-100
								"
								style={{
									transition: "max-width 1s,opacity 1s,transform .75s",
									marginRight: "17px",
								}}
							>
								Xem tất cả
							</div>
							<FaAngleRight className="text-base font-bold" />
						</div>
					</div>
				</div>
				{/* SWIPER */}
				<SwiperComponent />
			</div>
			<div className="item">
				{/* TITLE */}
				<div className="container-home mb-[1em]">
					<div className=" flex items-end group/title w-fit cursor-pointer">
						<h2 className="text-2xl font-medium text-[#e5e5e5] group-hover/title:text-[#fff] transition">Chương trình truyền hình Âu - Mỹ</h2>
						<div className=" flex items-center text-[#54b9c5] ">
							<div
								className="font-semibold max-w-0 opacity-0 whitespace-nowrap
								group-hover/title:translate-x-[15px]
								group-hover/title:max-w-[200px]
								group-hover/title:opacity-100
								"
								style={{
									transition: "max-width 1s,opacity 1s,transform .75s",
									marginRight: "17px",
								}}
							>
								Xem tất cả
							</div>
							<FaAngleRight className="text-base font-bold" />
						</div>
					</div>
				</div>
				{/* SWIPER */}
				<SwiperComponent />
			</div>
		</section>
	);
}
export default ListMovie;
