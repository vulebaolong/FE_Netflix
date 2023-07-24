import React from "react";
import anhDownLoad from "../../../assets/landingPage/download/mobile-0819.jpg";
import boxshot from "../../../assets/landingPage/download/boxshot.png";
import downLoadIcon from "../../../assets/landingPage/download/download-icon.gif";

function DownLoad() {
	return (
		<>
			<div className="container ">
				<div className="flex justify-center items-center ">
					<div
						className="relative flex-shrink-0
                     w-1/2"
					>
						<img src={anhDownLoad} alt="anh_Tv" />

						<div
							className="flex justify-center items-center py-2 px-3 overflow-hidden absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-black rounded-xl shadow-[0_0_2em_0_rgb(0,0,0)]
                        border-[rgba(128,128,128,0.7)] border-2 border-solid w-[54%] "
						>
							<img className="h-20 mr-4" src={boxshot} alt="boxshot" />
							<div className="flex-1">
								<p className="text-base font-bold text-white  ">Cậu bé mất tích</p>
								<p className="text-sm font-semibold text-[#0071eb] ">Đang tải xuống...</p>
							</div>
							<img className="w-12 h-12" src={downLoadIcon} alt="" />
						</div>
					</div>

					<div className="w-1/2">
						<h2 className="text-5xl font-black ">Tải xuống nội dung để xem ngoại tuyến</h2>
						<p className="font-normal text-2xl mt-4 pr-10">Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default DownLoad;
