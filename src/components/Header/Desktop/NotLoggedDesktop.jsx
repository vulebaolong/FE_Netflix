import { MdLanguage } from "react-icons/md";
import Button from "../../Button/Button";
import { navigate } from "../../../App";

function NotLoggedDesktop() {
	const handleButton = () => {
		navigate("/login");
	};
	return (
		<div className="flex flex-col-reverse sm:flex-row gap-1 sm:gap-2 justify-center items-center">
			<div className="relative">
				<div className="absolute top-1/2 -z-10 -translate-y-1/2 left-2">
					<MdLanguage />
				</div>
				<select className="dark:border-red-100/20 dark:focus:border-red-100/80 transition cursor-pointer bg-gray-50 py-1 pl-6 mr-2 border w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700/50  dark:placeholder-gray-400 dark:text-white ">
					<option value="vi">Tiếng Việt</option>
					<option value="en">English</option>
				</select>
			</div>

			<Button type={"primary"} size={"small"} onClick={handleButton}>
				<span className="text-base font-semibold ">Đăng nhập</span>
			</Button>
		</div>
	);
}
export default NotLoggedDesktop;
