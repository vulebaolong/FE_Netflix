import imageTv from "../../../assets/landingPage/tv/tv.png";
import videoTv from "../../../assets/landingPage/tv/video-tv-0819.mp4";

function Tv() {
	return (
		<section className="py-16">
			<div className="container">
				<div className="grid grid-cols-1 xl:grid-cols-2">
					<div className="justify-self-end self-center">
						<h2 className="heading-1">Thưởng thức trên TV của bạn</h2>
						<p className="para-1 mt-4">Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.</p>
					</div>
					<div className="relative">
						<img src={imageTv} alt="" />
						<div
							className="w-full h-ful absolute overflow-hidden
							max-w-[64%] max-h-[37%] top-[7%] left-[18%] -z-[1]
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
