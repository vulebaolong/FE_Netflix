import { useLocation } from "react-router-dom";
import Logo from "../../Logo/Logo";
import { lcStorage } from "../../../helpers/localStorage";
import { USER_LOGIN } from "../../../contants/userContants";
import LoggedDesktop from "./LoggedDesktop";
import NotLoggedDesktop from "./NotLoggedDesktop";
import { navigate } from "../../../App";

function HeaderDesktop() {
	const { pathname } = useLocation();

	const renderUserControl = () => {
		let jsx = <NotLoggedDesktop />;

		if (lcStorage.get(USER_LOGIN)) jsx = <LoggedDesktop />;

		if (pathname === "/login" || pathname === "/register") jsx = <></>;

		return jsx;
	};

	const containerHeader = () => {
		let container = "container";

		if (pathname === "/home" || pathname.split("/")[1] === "detail") {
			container = "px-[4%] 2xl:px-[60px]";
		}

		return container;
	};
	return (
		<>
			<div className={`${containerHeader()} h-full`}>
				<div className="h-full flex items-center">
					<div className="mr-auto">
						<Logo
							onClick={() => {
								navigate("/");
							}}
							className="
								w-[4rem]
								sm:w-[4rem]
								md:w-[6rem]
								lg:w-[7rem]
								xl:w-[8rem]
								2xl:w-[9.25rem]
								"
						/>
					</div>

					{renderUserControl()}
				</div>
			</div>
		</>
	);
}
export default HeaderDesktop;
