import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { MdLanguage } from "react-icons/md";
import style from "./Header.module.css";
import { useEffect } from "react";
import { HEIGHT_HEADER } from "../../../tailwind.config";
import { useLocation } from "react-router-dom";
import { navigate } from "../../App";
import NotLogged from "./NotLogged";
import { lcStorage } from "../../helpers/localStorage";
import { USER_LOGIN } from "../../contants/userContants";
import Logged from "./Logged";

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

	const renderHeaderRight = () => {
		let jsx = <NotLogged />;

		if (lcStorage.get(USER_LOGIN)) jsx = <Logged />

		if (pathname === "/login" || pathname === "/signup") jsx = <></>;

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
			<div className={`headerScroll  w-1/2 top-0 left-10 h-header bg-red-500/50 z-30 absolute`}></div>
			<header className={`${style.header} z-30`}>
				<div className={`${containerHeader()} h-full`}>
					<div className="h-full flex items-center">
						<div className="mr-auto">
							<Logo
								className="
								w-[3rem]
								sm:w-[4rem]
								md:w-[6rem]
								lg:w-[7rem]
								xl:w-[8rem]
								2xl:w-[9.25rem]
								"
							/>
						</div>

						{renderHeaderRight()}
					</div>
				</div>
			</header>
		</>
	);
}
export default Header;
