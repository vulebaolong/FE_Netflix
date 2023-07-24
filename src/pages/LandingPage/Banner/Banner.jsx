import React from "react";
import banner from "../../../assets/landingPage/banner/banner.jpg";

import StartWithEmail from "../../../components/StartWithEmail/StartWithEmail";

function Banner() {
	return (
		<div className="overflow-hidden relative" style={{ height: "700px" }}>
			<div className="absolute h-full w-full -z-10 ">
				<img className="object-cover w-full h-full  " src={banner} alt="" />

				<div
					className="absolute top-0 left-0 bottom-0 right-0 bg-black/40"
					style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)" }}
				></div>
			</div>

			<div className="container  h-full flex flex-col justify-center items-center">
				<h1 className=" leading-tight tracking-wide text-5xl font-black text-center" style={{ width: "76%" }}>
					Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
				</h1>
				<p className="m-4 block font-semibold text-2xl tracking-normal">Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>

				<StartWithEmail />
			</div>
		</div>
	);
}

export default Banner;
