import { FaAngleRight } from "react-icons/fa6";
import SwiperComponent from "./Swiper/SwiperComponent";

function ListMovie() {
	return (
		<section className="relative">
			<div className="item">
				{/* TITLE */}
				<div className="container-home">
					<div className=" flex items-end group/title w-fit cursor-pointer">
						<h2 className="text-2xl font-medium">Chương trình truyền hình Âu - Mỹ</h2>
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
