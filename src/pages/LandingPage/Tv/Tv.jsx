import imageTv from "../../../assets/landingPage/tv/tv.png";
import videoTv from "../../../assets/landingPage/tv/video-tv-0819.mp4";

function Tv() {
	return (
		<section className="py-16 bg-black">
			<div className="container">
				<div
					className="grid 
					grid-cols-1 
					xl:grid-cols-2
					"
				>
					<div data-aos-delay="500" data-aos-duration="1000" data-aos="fade-right" className="justify-self-end self-center">
						<h2
							className="heading-1
							text-center
							xl:text-start
							"
						>
							Thưởng thức trên TV của bạn
						</h2>
						<p
							className="para-1 mt-4
							text-center
							xl:text-start
							"
						>
							Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.
						</p>
					</div>

					<div className="relative" data-aos-delay="1000" data-aos-duration="1000" data-aos="fade-left">
						<img className=" relative z-[1] mx-auto" src={imageTv} alt="" />
						<div
							className="w-full h-ful absolute overflow-hidden z-0
							max-w-[74%] max-h-[56%] top-[20%] left-[13%] 
							md:max-w-[68%] md:left-[16%] 
							lg:max-w-[53%] lg:left-[23%]
							xl:max-w-[74%] xl:left-[13%] 
						"
						>
							<video autoPlay playsInline muted loop>
								<source src={videoTv} type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Tv;
