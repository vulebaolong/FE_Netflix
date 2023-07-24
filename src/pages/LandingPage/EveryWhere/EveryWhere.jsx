import React from "react";
import devices from "../../../assets/landingPage/everyWhere/device-pile-vn.png";
import videoDevices from "../../../assets/landingPage/everyWhere/video-devices-vn.mp4";

function EveryWhere() {
	return (
		<>
			<div className="container ">
				<div className="flex justify-center items-center ">
					<div className="w-1/2">
						<h2 className="text-5xl font-black ">Xem ở mọi nơi</h2>
						<p className="font-normal text-2xl mt-4 pr-10">
							Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.
						</p>
					</div>

					<div
						className="relative flex-shrink-0
                     w-1/2"
					>
						<img src={devices} alt="anh_Tv" />
						<div className="absolute top-[10.3%] left-[18.4%] w-full h-full max-w-[62%] max-h-[47%] overflow-hidden -z-[1]">
							<video autoPlay playsInline muted loop>
								<source src={videoDevices} type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default EveryWhere;
