import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Core modules imports are same as usual
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import Button from "./../../../../components/Button/Button";

function SwiperComponent() {
	const swiperRef = useRef();
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	const handleClickPrev = () => {
		// console.log(swiperRef.current);
		swiperRef.current?.slidePrev();
	};
	const handleClickNext = () => {
		// console.log(swiperRef.current);
		swiperRef.current?.slideNext();
	};
	return (
		<div className="flex">
			<Button type="primary" size="big" onClick={handleClickPrev}>
				Prev
			</Button>
			<Swiper
				effect="slide" // Sử dụng hiệu ứng trượt
				speed={1100}
				slidesPerView={6}
				spaceBetween={0}
				pagination={{
					clickable: true,
				}}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				slidesPerGroup={6}
				loop={true}
				modules={[Navigation, Pagination]}
				className="mySwiper"
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
				<SwiperSlide>
					{
						<img
							className=""
							src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283"
						/>
					}
				</SwiperSlide>
			</Swiper>
			<Button type="primary" size="big" onClick={handleClickNext}>
				Next
			</Button>
		</div>
	);
}
export default SwiperComponent;
