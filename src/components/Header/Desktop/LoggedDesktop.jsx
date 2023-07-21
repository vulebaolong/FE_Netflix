import { Avatar, Popover, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { IoMdLogOut, IoIosInformationCircleOutline, IoIosHelpCircleOutline } from "react-icons/io";
import { COLOR_PRIMARY } from "../../../../tailwind.config";
import { lcStorage } from "../../../helpers/localStorage";
import { USER_LOGIN } from "../../../contants/userContants";
import { navigate } from "../../../App";
import { resetUserREDU } from "../../../redux/slices/userSlices";
import { resetNotiREDU } from "../../../redux/slices/notiSlices";

const numRandom = Math.floor(Math.random() * 70) + 1;

function LoggedDesktop() {
	const dispatch = useDispatch()
	const { userLogin } = useSelector((state) => state.userSlices);
	const handleLogout = () => {
		lcStorage.remove(USER_LOGIN);
		dispatch(resetUserREDU())
		dispatch(resetNotiREDU())
        navigate('/logout')
	};
	const content = (
		<div className=" w-72 whitespace-normal text-[#e4e6eb]">
			<div className="flex gap-3 items-center px-3 py-1 hover:bg-[#343434] active:bg-[#2a2a2a] transition cursor-pointer rounded-md">
				<Avatar className="flex-shrink-0" src={<img src={`https://i.pravatar.cc/150?img=${numRandom}`} alt="avatar" />} size="large" />
				<p className="text-base font-bold truncate ">{userLogin.hoTen}</p>
				{userLogin.maLoaiNguoiDung === "KhachHang" ? <Tag color="green">khách hàng</Tag> : <Tag color={COLOR_PRIMARY}>admin</Tag>}
			</div>
			<hr className="border-gray-600 my-3" />

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
	);
	return (
		<div>
			<Popover content={content} trigger="hover" placement="bottomRight">
				<Avatar src={<img src={`https://i.pravatar.cc/150?img=${numRandom}`} alt="avatar" />} size={50} />
			</Popover>
		</div>
	);
}
export default LoggedDesktop;
