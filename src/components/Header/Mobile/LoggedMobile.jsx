import { Avatar, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { COLOR_PRIMARY } from "../../../../tailwind.config";
import { IoIosAddCircleOutline, IoIosHelpCircleOutline, IoIosInformationCircleOutline, IoMdLogOut } from "react-icons/io";
import { lcStorage } from "../../../helpers/localStorage";
import { USER_LOGIN } from "../../../contants/userContants";
import { resetUserREDU } from "../../../redux/slices/userSlices";
import { navigate } from "../../../App";
import { setOpenHeaderMobileREDU } from "../../../redux/slices/drawerSlice";
import { IoListCircleOutline } from "react-icons/io5";

function LoggedMobile() {
	const dispatch = useDispatch();
	const { userLogin, numAvatar } = useSelector((state) => state.userSlices);
	const handleDanhSachPhim = () => {
		navigate("/list-movie");
		dispatch(setOpenHeaderMobileREDU(false));
	};
	const handleThemPhim = () => {
		navigate("/add-movie");
		dispatch(setOpenHeaderMobileREDU(false));
	};
	const renderControlAdmin = () => {
		if (userLogin.maLoaiNguoiDung !== "QuanTri") return;

		return (
			<>
				<div onClick={handleDanhSachPhim} className="flex items-center gap-3 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer py-1 px-3 rounded-md">
					<div className="rounded-full shadow-md bg-white/10 p-[6px]">
						<IoListCircleOutline className="text-3xl" />
					</div>
					<span className="text-base font-semibold">Danh sách phim</span>
				</div>
				<div onClick={handleThemPhim} className="flex items-center gap-3 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer py-1 px-3 rounded-md">
					<div className="rounded-full shadow-md bg-white/10 p-[6px]">
						<IoIosAddCircleOutline className="text-3xl" />
					</div>
					<span className="text-base font-semibold">Thêm phim</span>
				</div>
			</>
		);
	};
	const handleLogout = () => {
		lcStorage.remove(USER_LOGIN);
		navigate("/logout");
		dispatch(resetUserREDU());
		dispatch(setOpenHeaderMobileREDU(false));
	};
	const handleAccountSetting = () => {
		navigate("/account-settings");
		dispatch(setOpenHeaderMobileREDU(false));
	};
	const handleThongTinDatVe = () => {
		navigate("/history");
		dispatch(setOpenHeaderMobileREDU(false));
	};
	const handleTrungTamTroGiup = () => {
		dispatch(setOpenHeaderMobileREDU(false));
	};
	const renderTag = () => {
		if (userLogin.maLoaiNguoiDung === "KhachHang") {
			return <Tag color="green">khách hàng</Tag>;
		}
		if (userLogin.maLoaiNguoiDung === "QuanTri") {
			return <Tag color={COLOR_PRIMARY}>admin</Tag>;
		}
	};
	return (
		<div className=" whitespace-normal text-[#e4e6eb]">
			<div
				onClick={handleAccountSetting}
				className="shadow-lg flex gap-3 items-center px-3 py-5 border border-white/10 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer rounded-md"
			>
				<Avatar className="flex-shrink-0" src={<img src={`https://i.pravatar.cc/150?img=${numAvatar}`} alt="avatar" />} size="large" />
				<p className="text-base font-bold truncate ">{userLogin.hoTen}</p>
				{renderTag()}
			</div>
			{/* <hr className="border-gray-600 my-3" /> */}

			<div className="space-y-2 mt-5">
				{renderControlAdmin()}
				<div onClick={handleThongTinDatVe} className="flex items-center gap-3 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer py-1 px-3 rounded-md">
					<div className="rounded-full shadow-md bg-white/10 p-[6px]">
						<IoIosInformationCircleOutline className="text-3xl" />
					</div>
					<span className="text-base font-semibold">Thông tin đặt vé</span>
				</div>

				<div onClick={handleTrungTamTroGiup} className="flex items-center gap-3 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer py-1 px-3 rounded-md">
					<div className="rounded-full shadow-md bg-white/10 p-[6px]">
						<IoIosHelpCircleOutline className="text-3xl" />
					</div>
					<span className="text-base font-semibold ">Trung tâm trợ giúp</span>
				</div>

				<div onClick={handleLogout} className="flex items-center gap-3 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer py-1 px-3 rounded-md">
					<div className="rounded-full shadow-md bg-white/10 p-[6px]">
						<IoMdLogOut className="text-3xl" />
					</div>
					<span className="text-base font-semibold">Đăng xuất</span>
				</div>
			</div>
		</div>
	);
}
export default LoggedMobile;
