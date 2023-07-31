import { useLocation } from "react-router-dom";
import Logo from "../../Logo/Logo";
import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import NotLoggedMobile from "./NotLoggedMobile";
import LoggedMobile from "./LoggedMobile";
import { lcStorage } from "../../../helpers/localStorage";
import { USER_LOGIN } from "../../../contants/userContants";
import { useDispatch, useSelector } from "react-redux";
import { setOpenHeaderMobileREDU } from "../../../redux/slices/drawerSlice";
import { navigate } from "../../../App";

function HeaderMobile() {
	const { pathname } = useLocation();
	const { openHeaderMobile } = useSelector((state) => state.drawerSlice);
	const dispatch = useDispatch();

	const renderUserControl = () => {
		let jsx = <NotLoggedMobile />;

		if (lcStorage.get(USER_LOGIN)) jsx = <LoggedMobile />;

		if (pathname === "/login" || pathname === "/signup") jsx = <></>;

		return jsx;
	};

	const isHeaderRight = pathname === "/login" || pathname === "/signup";

	const containerHeader = () => {
		let container = "container";

		if (pathname === "/home") {
			container = "px-[4%] 2xl:px-[60px]";
		}

		return container;
	};

	const showDrawer = () => {
		dispatch(setOpenHeaderMobileREDU(true));
	};
	const onClose = () => {
		dispatch(setOpenHeaderMobileREDU(false));
	};

	return (
		<>
			<div className={`${containerHeader()} h-full`}>
				<div className="h-full flex items-center">
					<div className="mr-auto">
						<Logo
							onClick={() => { navigate('/') }}
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
					<div className="">
						{!isHeaderRight && <Button onClick={showDrawer} icon={<MenuOutlined />}></Button>}
						<Drawer
							title={
								<Logo
									onClick={onClose}
									className="
									w-[4rem]
									sm:w-[4rem]
									md:w-[6rem]
									lg:w-[7rem]
									xl:w-[8rem]
									2xl:w-[9.25rem]
									"
								/>
							}
							closable={false}
							placement="right"
							width="100%"
							open={openHeaderMobile}
							extra={
								<Space>
									<Button type="text" onClick={onClose} shape="circle" icon={<CloseOutlined />}></Button>
								</Space>
							}
						>
							{renderUserControl()}
						</Drawer>
					</div>
				</div>
			</div>
		</>
	);
}
export default HeaderMobile;
