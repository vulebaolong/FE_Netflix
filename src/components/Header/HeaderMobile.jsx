import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import style from "./Header.module.css";

function HeaderMobile() {
	const { pathname } = useLocation();

	const containerHeader = () => {
		let container = "container";

		if (pathname === "/home") {
			container = "px-[4%] 2xl:px-[60px]";
		}

		return container;
	};
	return (
		<>
			<header
				className={`${style.header} z-[1000]
				h-header
				sm:h-header_sm
				md:h-header_md
				lg:h-header_lg
				xl:h-header_xl
				2xl:h-header_2xl
				`}
			>
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
						<div className="">mobile</div>
					</div>
				</div>
			</header>
		</>
	);
}
export default HeaderMobile;
