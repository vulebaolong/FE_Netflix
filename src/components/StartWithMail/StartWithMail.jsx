import { FaAngleRight } from "react-icons/fa6";
import Button from "../../components/Button/Button";

function StartWithMail() {
	return (
		<div className="">
			<h3 className="heading-3 text-center">Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</h3>
			<div className="flex flex-col lg:flex-row gap-3 justify-center mt-4">
				<div className="relative w-full lg:w-1/2 2xl:w-2/5">
					<input
						type="text"
						id="floating_filled"
						className="
						text-sm pb-3 pt-3.5
						sm:text-base sm:pb-3 sm:pt-3.5
						lg:text-xl lg:pb-2.5 lg:pt-6
						font-semibold block transition rounded-lg px-2.5 w-full text-gray-900 bg-gray-50 dark:bg-gray-700/50 border-2 dark:border-red-100/20 dark:focus:border-red-100/80 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						// text-xl font-semibold 
						// pb-2.5 pt-6
					/>
					<label
						htmlFor="floating_filled"
						className="
						text-sm 
						sm:text-base 
						lg:text-xl lg:font-semibold 
						font-semibold absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
						// text-xl font-semibold
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
	);
}
export default StartWithMail;
