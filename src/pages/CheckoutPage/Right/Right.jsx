import { Radio, Space, Tag, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Ghe from "../Left/Ghe";
import imgBarcode from "../../../assets/checkoutPage/barcode.png";
import Button from "../../../components/Button/Button";
import { datVeMID, selectedThanhToanREDU } from "../../../redux/slices/ticketSlice";
import momoImg from "../../../assets/checkoutPage/thanhtoan/momo.png";
import zalopayImg from "../../../assets/checkoutPage/thanhtoan/zaloPay.png";
import atmBlackImg from "../../../assets/checkoutPage/thanhtoan/atmBlack.png";
import atmWhiteImg from "../../../assets/checkoutPage/thanhtoan/atmWhite.png";
import visaImg from "../../../assets/checkoutPage/thanhtoan/visa_mastercard.png";

function Right() {
	const dispatch = useDispatch();

	const { thongTinPhim, danhSachGheDangChon, thanhToan, danhSachPhongVe } = useSelector((state) => state.ticketSlice);
	const [api, contextHolder] = notification.useNotification();
	const openNotification = (type = "success", title = "Tiêu đề", mes = "Tin nhắn", position = "top") => {
		api[type]({
			message: title,
			description: mes,
			placement: position,
		});
	};
	const handleDatVe = () => {
		if (danhSachGheDangChon.length === 0) {
			openNotification("warning", "Cảnh báo", "Xin vui lòng chọn ghế");
			return;
		}
		if (thanhToan === "0") {
			openNotification("warning", "Cảnh báo", "Xin vui lòng chọn hình thức thanh toán");
			return;
		}
		
		// showModal();
		dispatch(datVeMID({
			maLichChieu: thongTinPhim.maLichChieu,
			danhSachVe: danhSachGheDangChon,
		}));
	};

	const renderGhe = () => {
		return danhSachGheDangChon.map((ghe, index) => {
			const { tenGhe, loaiGhe } = ghe;
			const element = (
				<span className="text-slate-200 text-[0.4rem] sm:text-[0.62rem] xl:text-[0.70rem] 2xl:text-[0.72rem]">
					<strong>{tenGhe}</strong>
				</span>
			);

			// GHẾ VIP
			if (loaiGhe === "Vip") {
				return <Ghe type={"gheVip"} element={element} key={index} />;
			}

			// GHẾ THƯỜNG
			if (loaiGhe === "Thuong") {
				return <Ghe type={"gheDangChon"} element={element} key={index} />;
			}
		});
	};
	const renderGia = () => {
		let gia = 0;
		danhSachGheDangChon.forEach((ghe) => {
			gia += +ghe.giaVe;
		});

		return new Intl.NumberFormat(navigator.language).format(gia);
	};
	const onChange = (e) => {
		console.log("radio checked", e.target.value);
		dispatch(selectedThanhToanREDU(e.target.value));
	};
	const renderThanhToan = () => {
		if (danhSachGheDangChon.length === 0) {
			return <p className="text-red-500">Vui lòng chọn ghế</p>;
		}
		return (
			<Radio.Group onChange={onChange} value={thanhToan} className="">
				<Space direction="vertical">
					<Radio value={1}>
						<div className="flex items-center gap-2 ml-3  ">
							<img className="w-8 h-8" src={momoImg} alt="momoImg" />
							<p className="m-0 text-backgroundHome">Thanh toán qua ví MOMO</p>
						</div>
					</Radio>
					<Radio value={2}>
						<div className="flex items-center gap-2 ml-3  ">
							<img className="w-8 h-8" src={zalopayImg} alt="zalopayImg" />
							<p className="m-0 text-backgroundHome">Thanh toán qua ví ZaloPay</p>
						</div>
					</Radio>
					<Radio value={3}>
						<div className="flex items-center gap-2 ml-3  ">
							<img className="w-8 h-8" src={atmWhiteImg} alt="atmWhiteImg" />
							<p className="m-0 text-backgroundHome">Thanh toán qua ví ATM</p>
						</div>
					</Radio>
					<Radio value={4}>
						<div className="flex items-center gap-2 ml-3  ">
							<img className="w-8 h-8" src={visaImg} alt="atmWhiteImg" />
							<p className="m-0 text-backgroundHome">Thanh toán qua MasterCard</p>
						</div>
					</Radio>
				</Space>
			</Radio.Group>
		);
	};
	return (
		<>
			{contextHolder}
			<div className="w-full lg:w-[40%]  flex flex-col items-center px-2 self-stretch">
				<div className="w-[80%] flex-shrink-0 h-[30px] rounded-t-[1rem] border-t-[5px] border-l-[5px] border-r-[5px] border-[rgb(71,85,105)]"></div>
				<div className="flex flex-shrink-0 flex-col justify-between border-[5px] border-[rgb(71,85,105)] w-full h-[70px%]  rounded-[0.8rem] z-[1] bg-backgroundHome">
					<div className="ml-auto mr-2 mt-2 right-[10%] top-[10%] w-7 h-7 bg-[rgb(71,85,105)] rounded-full"></div>
					<div className="mx-auto -mb-[6px] w-[75%] h-[30px] bg-gray-300 rounded-t-[0.8rem] border-[5px] border-b-gray-300 border-t-[rgb(71,85,105)] border-r-[rgb(71,85,105)] border-l-[rgb(71,85,105)]  "></div>
				</div>
				<div className="w-[75%]  flex flex-col items-center">
					<div className="w-full  bg-gray-300 p-2">
						<p className="text-backgroundHome overflow-hidden truncate">
							<span className="text-lg font-extrabold">{thongTinPhim.tenPhim}</span>
						</p>
						<p className="text-backgroundHome overflow-hidden truncate">
							<span className="font-medium">Ngày chiếu: </span>
							<span className="text-sm">{thongTinPhim.ngayChieu}</span>
						</p>
						<p className="text-backgroundHome overflow-hidden truncate">
							<span className="font-medium">Giờ chiếu: </span>
							<span className="text-sm">{thongTinPhim.gioChieu}</span>
						</p>
						<p className="text-backgroundHome overflow-hidden truncate">
							<span className="font-medium">Rạp: </span>
							<span className="text-sm">{thongTinPhim.tenRap}</span>
						</p>
						<p className="text-backgroundHome overflow-hidden truncate">
							<span className="font-medium">Cụm Rạp: </span>
							<span className="text-sm">{thongTinPhim.tenCumRap}</span>
						</p>
						<p className="text-backgroundHome overflow-hidden truncate">
							<span className="font-medium">Địa chỉ: </span>
							<span className="text-sm">{thongTinPhim.diaChi}</span>
						</p>
						<div className="text-backgroundHome">
							<p className="font-medium">Ghế: </p>
							<div className="flex flex-wrap gap-2 h-[80px]  overflow-y-auto">{renderGhe()}</div>
						</div>
						{/* HÌNH THỨC THANH TOÁN */}
						<div className="space-y-2 flex flex-col text-backgroundHome">
							<p className="font-medium">Hình thức thanh toán: </p>
							<div className="h-[208px] ">{renderThanhToan()}</div>
						</div>
					</div>
					<hr className="w-[85%] border-dotted border-2" />
					<div className="w-full h-[30%] bg-gray-300 rounded-lg relative flex items-center justify-center">
						<div className="w-[80%] h-[120px] py-5">
							<img className="w-full h-full object-cover" src={imgBarcode} alt="" />
						</div>
						<div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-backgroundHome rounded-full"></div>
						<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-backgroundHome rounded-full"></div>
					</div>
				</div>
				<div className="w-[75%] mt-2 space-y-2 h-[25%] p-2 rounded-2xl border border-white/20">
					<p className="text-2xl font-bold text-center text-green-400 m-0">
						<span>{renderGia()}</span>
						<span> đ</span>
					</p>
					<Button
						type="primary"
						size="big"
						className="w-full"
						onClick={() => {
							handleDatVe();
						}}
					>
						<span className="text-2xl font-bold">Xác nhận</span>
					</Button>
				</div>
			</div>
		</>
	);
}
export default Right;
