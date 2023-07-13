import React from "react";
import banner from "../../../assets/landingPage/banner/banner.jpg";
import Button from "../../../components/Button/Button";
import { FaAngleRight } from "react-icons/fa6";

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

				<div>
					<h3 className="m-4 block font-semibold text-xl tracking-normal leading-7 ">
						Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
					</h3>
					<div className="flex justify-center items-stretch gap-4 ">
						<div className="relative w-[55%] ">
							<input
								type="email"
								id="floating_filled"
								className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-gray-900 bg-gray-50 dark:bg-gray-700/50 
							border-2  border-gray-300 appearance-none dark:text-white dark:border-gray-600 transition dark:focus:border-blue-50/70 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-medium "
								placeholder=" "
							/>
							<label
								htmlFor="floating_filled"
								className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 font-medium"
							>
								Địa chỉ Email
							</label>
						</div>

						<Button type="primary" size="big">
							<div className="flex items-center justify-center">
								<span className="text-xl font-bold">Bắt đầu </span>
								<FaAngleRight size={20} />
							</div>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
