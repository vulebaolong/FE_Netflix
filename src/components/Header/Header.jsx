import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { MdLanguage } from "react-icons/md";
import style from "./Header.module.css";
import { useEffect } from "react";
import { HEIGHT_HEADER } from "../../../tailwind.config";
import { useLocation } from "react-router-dom";
import { navigate } from "../../App";

function Header() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Chọn phần tử header
		const headerScroll = document.querySelector(".headerScroll");
		const header = document.querySelector("header");

		// Tạo một callback
		const callBack = (entries) => {
			const [entry] = entries;
			const isAction = entry.isIntersecting;
			if (!isAction) {
				header.classList.add(`${style.sticky}`);
			} else {
				header.classList.remove(`${style.sticky}`);
			}
		};

		// Tạo một option
		const obsOption = {
			root: null,
			threshold: 1,
			rootMargin: HEIGHT_HEADER, // chiều cao của header
		};

		// Tạo một instance của Intersection Observer
		const observer = new IntersectionObserver(callBack, obsOption);

		// Theo dõi phần tử banner bằng Intersection Observer
		if (headerScroll) observer.observe(headerScroll);
	}, []);

	const handleButton = () => {
		navigate("/login");
	};

	const renderHeaderRight = () => {
		let jsx = (
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

		if (pathname === "/login" || pathname === "/signup") {
			jsx = <></>;
		}

		return jsx;
	};

	const containerHeader = () => {
		let container = "container";

		if (pathname === "/home") {
			container = "px-[4%] 2xl:px-[60px]";
		}

		return container;
	};

	return (
		<>
			<div className={`headerScroll  w-1/2 top-0 left-10 h-header bg-red-500/50 z-10 absolute`}></div>
			<header className={`${style.header} z-20`}>
				<div className={`${containerHeader()} h-full`}>
					<div className="h-full flex items-center">
						<div className="mr-auto">
							<Logo />
						</div>

						{renderHeaderRight()}
					</div>
				</div>
			</header>
		</>
	);
}
export default Header;
