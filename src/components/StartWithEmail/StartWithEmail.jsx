import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Button from "../Button/Button";

function StartWithEmail() {
	return (
		<>
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
		</>
	);
}

export default StartWithEmail;
