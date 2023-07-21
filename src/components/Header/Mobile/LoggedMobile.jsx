import { Avatar, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { COLOR_PRIMARY } from "../../../../tailwind.config";
import { IoIosHelpCircleOutline, IoIosInformationCircleOutline, IoMdLogOut } from "react-icons/io";
import { lcStorage } from "../../../helpers/localStorage";
import { USER_LOGIN } from "../../../contants/userContants";
import { resetUserREDU } from "../../../redux/slices/userSlices";
import { resetNotiREDU } from "../../../redux/slices/notiSlices";
import { navigate } from "../../../App";
import { setOpenHeaderMobile } from "../../../redux/slices/drawerSlice";
const numRandom = Math.floor(Math.random() * 70) + 1;

function LoggedMobile() {
	const dispatch = useDispatch();
	const { userLogin } = useSelector((state) => state.userSlices);
	const handleLogout = () => {
		lcStorage.remove(USER_LOGIN);
		navigate("/logout");
		dispatch(resetUserREDU());
		dispatch(resetNotiREDU());
		dispatch(setOpenHeaderMobile(false));
	};
	return (
		<div className=" whitespace-normal text-[#e4e6eb]">
			<div className="shadow-lg flex gap-3 items-center px-3 py-5 border border-white/10 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer rounded-md">
				<Avatar className="flex-shrink-0" src={<img src={`https://i.pravatar.cc/150?img=${numRandom}`} alt="avatar" />} size="large" />
				<p className="text-base font-bold truncate ">{userLogin.hoTen}</p>
				{userLogin.maLoaiNguoiDung === "KhachHang" ? <Tag color="green">khách hàng</Tag> : <Tag color={COLOR_PRIMARY}>admin</Tag>}
			</div>
			{/* <hr className="border-gray-600 my-3" /> */}
			<div className="space-y-2 mt-5">
				<div className="flex items-center gap-3 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer py-1 px-3 rounded-md">
					<div className="rounded-full shadow-md bg-white/10 p-[6px]">
						<IoIosInformationCircleOutline className="text-3xl" />
					</div>
					<span className="text-base font-semibold">Thông tin đặt vé</span>
				</div>

				<div className="flex items-center gap-3 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer py-1 px-3 rounded-md">
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
