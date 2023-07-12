import backgroundBanner from "../../../assets/landingPage/banner/banner.jpg";
import { FaAngleRight } from "react-icons/fa6";
import Button from "../../../components/Button/Button";

function Banner() {
	return (
		<section>
			<div className="relative overflow-hidden" style={{ height: "700px" }}>
				<div className="absolute -z-10">
					<img className="object-cover w-full h-full" src={backgroundBanner} alt="" />
					<div
						className="absolute bg-black/40 top-0 left-0 bottom-0 right-0 "
						style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)" }}
					></div>
				</div>
				<div className="container h-full pt-[5.375rem]">
					<div className="flex flex-col justify-center h-full ">
						<h1 className="heading-1 text-center px-32">Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác</h1>
						<p className="para-1 text-center my-4">Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
						<div className="">
							<h3 className="heading-3 text-center">Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</h3>
							<div className="flex gap-3 justify-center mt-4">
								<div className="relative w-1/3">
									<input
										type="text"
										id="floating_filled"
										className="block  text-xl font-semibold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-gray-900 bg-gray-50 dark:bg-gray-700/50 border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
									/>
									<label
										htmlFor="floating_filled"
										className="absolute text-xl font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
									>
										Địa chỉ email
									</label>
								</div>
								<Button type={"primary"} size={"big"}>
									<span className="text-2xl font-bold ">Bắt đầu</span>
									<FaAngleRight fontSize={25} />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Banner;
