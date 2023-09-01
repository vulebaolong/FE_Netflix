import React from "react";
import kids from "../../../assets/landingPage/child/child.png";

function Kids() {
	return (
		<>
			<div className="container ">
				<div className="flex justify-center items-center ">
					<div
						className="relative flex-shrink-0
                     w-1/2"
					>
						<img src={kids} alt="anh_Kids" />
					</div>

					<div className="w-1/2">
						<h2 className="text-5xl font-black ">Tạo hồ sơ cho trẻ em</h2>
						<p className="font-normal text-2xl mt-4 pr-10">
							Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của
							bạn.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Kids;
