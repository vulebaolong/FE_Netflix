import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import PropTypes from "prop-types";
const { Paragraph } = Typography;

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Tag, Typography } from "antd";
import { COLOR_PRIMARY } from "../../../../tailwind.config";
import Button from "../../../components/Button/Button";
import { navigate } from "../../../App";

function SliderMobile({ listMovie }) {
	const handleDetailMovie = (movie) => {
		navigate(`/detail/${movie.maPhim}`);
	};
	const handleBuyMovie = (movie) => {
		navigate(`/detail/${movie.maPhim}#detailTab`);
	};
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
						return (
							<SwiperSlide key={i} className="bg-transparent w-full">
								<div className="w-full rounded-lg dark:bg-gray-800 dark:border-gray-800 p-4 overflow-hidden">
									<div className="aspect-[16/9] rounded-t-md overflow-hidden">
										{/* <img className="w-full h-full object-cover" src={movie.hinhAnh} alt="" /> */}
										<img
											className="w-full h-full object-cover"
											src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQzFKX--7urXzmDAho8UO--1_f2IQiZWy1RD5BKoXVCodfPd--G3z12AoX0u7Sk1Z-F4PUfld73NobbFcNXx3d55InOiHc-DCOi5.webp?r=051"
											alt=""
										/>
									</div>
									<div className=" bg-[#181818] overflow-hidden rounded-b-rounded-t-md p-3">
										{/* TITLE */}
										<div className="whitespace-normal flex gap-2 items-center">
											<h3 className="text-sm sm:text-base md:text-xl font-bold truncate">{movie.tenPhim}</h3>
											<Tag className="text-[7px] font-extrabold leading-normal" color={COLOR_PRIMARY}>
												HOT
											</Tag>
										</div>

										{/* TAG */}
										<div className=" flex flex-wrap mb-2">
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
										<div className="DESCRIPTION  pt-2 pb-4">
											<Paragraph ellipsis={{ rows: 3 }} className="text-xs md:text-sm !mb-0 ">
												{/* <span className="text-xs font-bold">Mô tả: </span> */}
												{movie.moTa}
											</Paragraph>
										</div>

										{/* BUTTON */}
										<div className="flex gap-2">
											<Button
												onClick={() => {
													handleBuyMovie(movie);
												}}
												className="w-1/2 !px-0"
												type="secondary"
												size="big"
											>
												<span
													className=" font-bold
													text-base
													sm:text-lg
													md:text-xl
                                    				"
												>
													Đặt vé
												</span>
											</Button>
											<Button
												onClick={() => {
													handleDetailMovie(movie);
												}}
												className="w-1/2 !px-0"
												type="tertiary"
												size="big"
											>
												<span
													className=" font-bold
													text-base
													sm:text-lg
													md:text-xl
                                    				"
												>
													Thông tin
												</span>
											</Button>
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
