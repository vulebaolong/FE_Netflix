import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { Avatar } from "antd";
import Ghe from "./Ghe";
import { gheDangChonREDU, layDanhSachPhongVeMID } from "../../../redux/slices/ticketSlice";
import style from "../CheckoutPage.module.css";
import Note from "./Note";

function Chairs() {
	const dispatch = useDispatch();
	const { id } = useParams();
	useEffect(() => {
		dispatch(layDanhSachPhongVeMID(id));
	}, []);
	const { danhSachGhe, danhSachGheNguoiKhacChon, danhSachGheDangChon } = useSelector((state) => state.ticketSlice);
	const { userLogin, numAvatar } = useSelector((state) => state.userSlices);
	// Chia mảng gốc thành các mảng con có 16 phần tử và chỉ lấy 10 phần tử đầu tiên
	const list = _.chunk(danhSachGhe, 16).slice(0, 10);
	const renderGhe = (hang, letter) => {
		return hang.map((ghe, index) => {
			const { daDat, loaiGhe } = ghe;
			const data = { ...ghe, tenGhe: `${letter}${ghe.tenGhe}` };
			const handleOnclick = () => dispatch(gheDangChonREDU(data));

			// GHẾ BẠN MUA
			if (ghe.taiKhoanNguoiDat === userLogin.taiKhoan) {
				const element = (
					<Avatar
						src={<img src={`https://i.pravatar.cc/150?img=${numAvatar}`} alt="avatar"></img>}
						className="w-[1rem] h-[1rem]
						sm:w-4 sm:h-4
						md:w-4 md:h-4
						lg:w-4 lg:h-4
						xl:w-5 xl:h-5
						2xl:w-6 2xl:h-6
						"
					/>
				);
				return <Ghe type={"gheDaMua"} key={index} element={element} />;
			}

			// GHẾ NGƯỜI KHÁC MUA
			if (daDat) {
				const element = (
					<strong>
						<i className="fa-solid fa-x text-slate-200"></i>
					</strong>
				);
				return <Ghe type={"gheDuocMua"} key={index} element={element} />;
			}

			// GHẾ NGƯỜI KHÁC ĐANG CHỌN
			const indexGheNguoiChon = danhSachGheNguoiKhacChon.findIndex((item) => {
				return item.maGhe === ghe.maGhe;
			});

			if (indexGheNguoiChon !== -1) {
				const element = <i className="fa-solid fa-user text-slate-200"></i>;
				return <Ghe type={"gheDangChon"} key={index} element={element} />;
			}

			// GHẾ ĐANG CHỌN
			const indexGheBanChon = danhSachGheDangChon.findIndex((item) => {
				return item.maGhe === ghe.maGhe;
			});

			if (indexGheBanChon !== -1) {
				const element = (
					<span className="text-slate-200 text-[0.4rem] sm:text-[0.62rem] xl:text-[0.70rem] 2xl:text-[0.72rem]">
						<strong>{data.tenGhe}</strong>
					</span>
				);
				return <Ghe type={"gheDangChon"} key={index} element={element} onClick={handleOnclick} />;
			}

			// GHẾ VIP
			if (loaiGhe === "Vip") {
				return <Ghe type={"gheVip"} key={index} onClick={handleOnclick} />;
			}

			// GHẾ THƯỜNG
			if (loaiGhe === "Thuong") {
				return <Ghe type={"gheThuong"} key={index} onClick={handleOnclick} />;
			}
		});
	};
	const renderHang = () => {
		return list.map((hang, index) => {
			const letter = String.fromCharCode("A".charCodeAt(0) + index);
			return (
				<div className="flex gap-2 xl:gap-3" key={index}>
					<div className="w-3 text-xs sm:text-base sm:w-7 flex items-center justify-center">
						<strong>{letter}</strong>
					</div>
					<div className="flex gap-[0.15rem] sm:gap-1 xl:gap-2">{renderGhe(hang, letter)}</div>
				</div>
			);
		});
	};
	return <div className="flex flex-col items-center space-y-1 xl:space-y-3">{renderHang()}</div>;
}
export default Chairs;
