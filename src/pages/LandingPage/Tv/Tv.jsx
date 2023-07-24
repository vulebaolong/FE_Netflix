import React from "react";

import anhTv from "../../../assets/landingPage/tv/tv.png";
import videoTv from "../../../assets/landingPage/tv/video-tv-0819.mp4";

function Tv() {
	return (
		<>
			<div className="container ">
				<div className="flex justify-center items-center ">
					<div className="w-1/2">
						<h2 className="text-5xl font-black ">Thưởng thức trên TV của bạn</h2>
						<p className="font-normal text-2xl mt-4 pr-10">Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.</p>
					</div>

					<div
						className="relative flex-shrink-0
                     w-1/2"
					>
						<img src={anhTv} alt="anh_Tv" />
						<div className="absolute top-[20.6%] left-[12.6%] w-full h-full max-w-[74%] max-h-[57%] overflow-hidden -z-[1]">
							<video autoPlay playsInline muted loop>
								<source src={videoTv} type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Tv;
