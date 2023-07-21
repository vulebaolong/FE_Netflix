import Logo from "../Logo/Logo";
import style from "./Header.module.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotLogged from "./NotLogged";
import { lcStorage } from "../../helpers/localStorage";
import { USER_LOGIN } from "../../contants/userContants";
import Logged from "./Logged";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./headerDesktop";

function Header() {

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
			rootMargin: `${header.offsetHeight}px`, // chiều cao của header
		};

		// Tạo một instance của Intersection Observer
		const observer = new IntersectionObserver(callBack, obsOption);

		// Theo dõi phần tử banner bằng Intersection Observer
		if (headerScroll) observer.observe(headerScroll);
	}, []);



	return (
		<>
			<div
				className={`headerScroll w-1/2 top-0 left-10 bg-red-500/50 z-30 absolute
				h-header
				sm:h-header_sm
				md:h-header_md
				lg:h-header_lg
				xl:h-header_xl
				2xl:h-header_2xl
				`}
			></div>
			<div className="hidden lg:block">
				<HeaderDesktop />
			</div>
			<div className="block lg:hidden">
				<HeaderMobile />
			</div>
		</>
	);
}
export default Header;
