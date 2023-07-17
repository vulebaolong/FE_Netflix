import { Swiper, SwiperSlide } from "swiper/react";
// Core modules imports are same as usual
import { Navigation, Pagination, A11y } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef} from "react";
import Button from "./../../../../components/Button/Button";
import { useSelector } from "react-redux";

// const list = [
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// 	{
// 		img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283",
// 	},
// ];

function SwiperComponent() {
	const { listMovie } = useSelector((state) => state.movieSlice);

	const swiperRef = useRef();
	const navigationPrevRef = useRef(null);
	const btnPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	const handleClickPrev = () => {
		swiperRef.current?.slidePrev();
	};
	const handleClickNext = () => {
		const btnPrevEl = btnPrevRef.current

		if (btnPrevEl.classList.contains("hidden")) {
			btnPrevEl.classList.remove("hidden")
			btnPrevEl.classList.add("flex")
		} 
		swiperRef.current?.slideNext();
	};
	const renderSwiper = () => {
		if (listMovie.length > 0) {
			return (
				<Swiper
					effect="slide" // Sử dụng hiệu ứng trượt
					speed={1100}
					slidesPerView={6}
					spaceBetween={8}
					zoom={true}
					modules={[Navigation, Pagination, A11y]}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					pagination={{ clickable: true }}
					slidesPerGroup={6}
					loop={true}
					className="mySwiper"
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
					{listMovie.map((movie, i) => {
						return (
							<SwiperSlide key={i} className="h-[8.645vw]">
								{<img src={movie.hinhAnh} />}
							</SwiperSlide>
						);
					})}
				</Swiper>
			);
		}
	};

	return (
		<div className="relative group/swiper">
			<Button
				className="btnPrev hidden absolute group-hover/swiper:bg-[#141414]/70 bg-[#141414]/50 top-0 left-0 h-full z-10 w-[4%] 2xl:w-[60px] justify-center items-center rounded-r-[0.2vw]"
				type="navigattion"
				onClick={handleClickPrev}
				ref={btnPrevRef}
			>
				<FaAngleLeft className="text-4xl" />
			</Button>
			{renderSwiper()}
			<Button
				className="btnNext absolute group-hover/swiper:bg-[#141414]/70 bg-[#141414]/50 top-0 right-0 h-full z-10 w-[4%] 2xl:w-[60px] flex justify-center items-center rounded-r-[0.2vw]"
				type="navigattion"
				onClick={handleClickNext}
			>
				<FaAngleRight className="text-4xl" />
			</Button>
		</div>
	);
}
export default SwiperComponent;
