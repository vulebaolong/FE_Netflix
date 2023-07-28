import imgMobile from "../../../assets/landingPage/download/mobile-0819.jpg";
import imgBoxshot from "../../../assets/landingPage/download/boxshot.png";
import imgDownloadIcon from "../../../assets/landingPage/download/download-icon.gif";

function Download() {
	return (
		<section className="py-16 bg-black">
			<div className="container">
				<div
					className="grid 
					grid-cols-1 
					xl:grid-cols-2
					"
				>
					<div
						data-aos-delay="1000"
						data-aos-duration="1000"
						data-aos="fade-right"
						className="relative 
						order-2
						xl:order-1
						"
					>
						<img className="w-full" src={imgMobile} alt="" />
						<div
							className="absolute flex bg-black justify-between gap-5 overflow-hidden left-1/2 -translate-x-1/2 rounded-xl border-2 border-solid border-[#808080b3] 
							w-[70%] bottom-[6%] px-1 py-2
							sm:w-[60%] sm:bottom-[6%] sm:px-2 sm:py-3
							md:w-[58%]
							lg:w-[60%]
							xl:w-[1/2] xl:bottom-[8%] xl:px-3 xl:py-4
							"
							// w-1/2 bottom-[8%] px-3 py-4
						>
							<div
								className="flex items-center
								h-12
								sm:h-20
								md:h-24
								lg:h-32
								xl:h-20
								"
								// h-20
							>
								<img className="h-full" src={imgBoxshot} alt="" />
							</div>
							<div className="flex flex-col justify-center flex-1">
								<p
									className="font-semibold
									text-xs
									sm:text-lg
									lg:text-xl
									xl:text-lg
									"
									// text-lg
								>
									Cậu bé mất tích
								</p>
								<p
									className=" font-normal text-[#0071eb]
									text-xs
									sm:text-base
									lg:text-lg
									xl:text-base
									"
									// text-base
								>
									Đang tải xuống...
								</p>
							</div>
							<div className="flex items-center">
								<img className="h-12 w-12" src={imgDownloadIcon} alt="" />
							</div>
						</div>
					</div>

					<div
						data-aos-delay="500"
						data-aos="fade-left"
						data-aos-duration="1000"
						className=" self-center 
						order-1 
						xl:order-2 
						"
					>
						<h2
							className="heading-1
							text-center
							xl:text-start
							"
						>
							Tải xuống nội dung để xem ngoại tuyến
						</h2>
						<p
							className="para-1 mt-4
							text-center
							xl:text-start
							"
						>
							Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Download;
