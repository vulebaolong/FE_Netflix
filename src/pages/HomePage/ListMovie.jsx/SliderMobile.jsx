import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import PropTypes from "prop-types";
const { Paragraph } = Typography;

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Tag, Typography } from "antd";
import { COLOR_PRIMARY } from "../../../../tailwind.config";

function SliderMobile({ listMovie }) {
	const renderSwiper = () => {
		if (listMovie.length > 0) {
			return (
				<Swiper
					loop={true}
					effect={"cards"}
					grabCursor={true}
					modules={[EffectCards]}
					className="w-[85vw] mx-auto
						sm:w-[450px]
						md:w-[550px]
						"
				>
					{listMovie.map((movie, i) => {
						console.log(movie.moTa);
						return (
							<SwiperSlide key={i} className="bg-transparent w-full">
								<div className="w-full h-full rounded-lg dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700 p-5 overflow-hidden">
									<img className="w-full h-full object-cover" src={movie.hinhAnh} alt="" />
									<div className=" bg-[#181818] overflow-hidden rounded-b-[0.2vw]">
										{/* TITLE */}
										<div className="whitespace-normal px-2 flex gap-2 items-center">
											<h3 className="text-base font-bold truncate">{movie.tenPhim}</h3>
											<Tag className="text-[7px] font-extrabold leading-normal" color={COLOR_PRIMARY}>
												HOT
											</Tag>
										</div>

										{/* TAG */}
										<div className="px-2 flex flex-wrap">
											<Tag color="red" className="text-[8px] mt-1 font-bold leading-normal">
												18+
											</Tag>
											{movie.sapChieu && (
												<Tag color="green" className="text-[8px] mt-1 font-normal leading-normal">
													Sắp chiếu
												</Tag>
											)}
											{movie.dangChieu && (
												<Tag color="gold" className="text-[8px] mt-1 font-normal leading-normal">
													Đang chiếu
												</Tag>
											)}
										</div>

										{/* DESCRIPTION */}
										<div className="DESCRIPTION px-2 pt-2 pb-4">
											<Paragraph ellipsis={{ rows: 3 }} className="text-[10px] !mb-0 ">
												{/* <span className="text-xs font-bold">Mô tả: </span> */}
												{movie.moTa}
											</Paragraph>
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			);
		}
	};
	return <>{renderSwiper()}</>;
}

SliderMobile.propTypes = {
	listMovie: PropTypes.any,
};

export default SliderMobile;
