import { Swiper, SwiperSlide } from "swiper/react";
// Core modules imports are same as usual
import { Navigation, Pagination, A11y } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import Button from "../../../components/Button/Button";
import { useSelector } from "react-redux";

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
		const btnPrevEl = btnPrevRef.current;

		if (btnPrevEl.classList.contains("hidden")) {
			btnPrevEl.classList.remove("hidden");
			btnPrevEl.classList.add("flex");
		}
		swiperRef.current?.slideNext();
	};

	const handleMouseEnter = (e) => {
		const modalMovieEl = document.querySelector(".modalMovie");
		const movieEl = e.target;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		if (modalMovieEl.classList.contains("hidden")) {
			modalMovieEl.classList.remove("hidden");
			modalMovieEl.classList.add("block");
		}

		const widthModalMovieEl = modalMovieEl.clientWidth;
		const widthMovieEl = movieEl.clientWidth;


		const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
		const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

		const rect = e.target.getBoundingClientRect();
		const top = rect.top;
		const left = rect.left;
		const right = rect.right;

		const topPercentage = (rect.top / viewportHeight) * 100;
		const leftPercentage = Math.round((rect.left / viewportWidth) * 100);

		if (leftPercentage > 75) {
			modalMovieEl.style.top = `${top + scrollTop}px`;
			modalMovieEl.style.left = `${right - widthModalMovieEl}px`;
			console.log("phải");
		}

		if (leftPercentage < 10) {
			modalMovieEl.style.top = `${top + scrollTop}px`;
			modalMovieEl.style.left = `${left}px`;
			console.log("trái");
		}

		if (!(leftPercentage < 10) && !(leftPercentage > 75)) {
			modalMovieEl.style.top = `${top + scrollTop}px`;
			modalMovieEl.style.left = `${(left + (widthMovieEl /2)) - (widthModalMovieEl/2)}px`;
			console.log("giữa");
		}
		// console.log("top", topPercentage, "%");
		console.log("left", leftPercentage, "%");
	};

	const renderSwiper = () => {
		if (listMovie.length > 0) {
			return (
				<Swiper
					effect="slide" // Sử dụng hiệu ứng trượt
					speed={1100}
					slidesPerView={2}
					spaceBetween={2}
					slidesPerGroup={2}
					zoom={true}
					modules={[Navigation, Pagination, A11y]}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					pagination={{ clickable: true }}
					loop={true}
					className="mySwiper"
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					breakpoints={{
						640: {
							slidesPerView: 3,
							spaceBetween: 3,
							slidesPerGroup: 3,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 4,
							slidesPerGroup: 4,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 5,
							slidesPerGroup: 5,
						},
						1280: {
							slidesPerView: 5,
							spaceBetween: 5,
							slidesPerGroup: 5,
						},
						1536: {
							slidesPerView: 6,
							spaceBetween: 8,
							slidesPerGroup: 6,
						},
					}}
				>
					{listMovie.map((movie, i) => {
						return (
							<SwiperSlide
								key={i}
								className="
								aspect-[341/192]
								relative
								"
							>
								{
									<div className="w-full h-full relative group/SwiperSlide" onMouseEnter={handleMouseEnter}>
										<div className="absolute w-full h-full overflow-hidden rounded-[0.2vw]">
											<img src={movie.hinhAnh} />
										</div>
									</div>
								}
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
				<FaAngleLeft
					className="
					text-[10px]
					sm:text-sm
					md:text-xl
					lg:text-3xl
					xl:text-4xl
					"
					// text-4xl
				/>
			</Button>
			{renderSwiper()}
			<Button
				className="btnNext absolute group-hover/swiper:bg-[#141414]/70 bg-[#141414]/50 top-0 right-0 h-full z-10 w-[4%] 2xl:w-[60px] flex justify-center items-center rounded-r-[0.2vw]"
				type="navigattion"
				onClick={handleClickNext}
			>
				<FaAngleRight
					className="
					text-[10px]
					sm:text-sm
					md:text-xl
					lg:text-3xl
					xl:text-4xl
					"
					// text-4xl
				/>
			</Button>
		</div>
	);
}
export default SwiperComponent;
