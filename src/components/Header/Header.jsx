import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { MdLanguage } from "react-icons/md";

function Header() {
	return (
		<header className="fixed w-full h-[5.375rem] z-20">
			<div className="container h-full">
				<div className="h-full flex items-center">
					<div className="mr-auto">
						<Logo />
					</div>

					<div className="relative ">
						<div className="absolute top-1/2 -z-10 -translate-y-1/2 left-2">
							<MdLanguage />
						</div>
						<select className="cursor-pointer bg-gray-50 py-1 pr-4 pl-6 mr-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<option value="vi">Tiếng Việt</option>
							<option value="en">English</option>
						</select>
					</div>

					<Button type={"primary"} size={"small"}>
						<span className="text-base font-semibold ">Đăng nhập</span>
					</Button>
				</div>
			</div>
		</header>
	);
}
export default Header;
