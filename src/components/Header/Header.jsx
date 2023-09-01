import React, { useEffect } from "react";
import Logo from "../Logo/Logo";
import style from "./Header.module.css";
import { HEIGHT_HEADER } from "../../../tailwind.config";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { MdLanguage } from "react-icons/md";

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
				console.log("add sticky");
				header.classList.add(`${style.sticky}`);
			} else {
				console.log("remove sticky");
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

	return (
		<>
			<div className="headerScroll h-header w-1/2 bg-red-500/50 absolute z-10 top-0"></div>

			<header className={`${style.header} ${style.sticky} z-[100]`}>
				<div className="container">
					<div className=" h-[5.375rem] flex justify-between items-center">
						<NavLink to="/">
							<Logo />
						</NavLink>
						<div className="flex justify-between gap-6 items-center">
							<div className="relative">
								<div className=" absolute top-[50%] -translate-y-[50%] left-[6px] text-[20px]">
									<MdLanguage />
								</div>
								<select className="bg-transparent pl-[1.65rem] pr-[0.25rem] py-[0.375rem] border-[0.7px] border-white/50 border-solid rounded  font-semibold">
									<option value="vi-VN">Tiếng Việt</option>
									<option value="en-VN">English</option>
								</select>
							</div>

							<div>
								<Button type="primary" size="small">
									<NavLink to={"/login"}>
										<span className="font-bold text-sm">Đăng nhập</span>
									</NavLink>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
