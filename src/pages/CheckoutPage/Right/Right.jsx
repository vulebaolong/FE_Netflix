import { Tag } from "antd";
import { useSelector } from "react-redux";
import Ghe from "../Left/Ghe";
import imgBarcode from "../../../assets/checkoutPage/barcode.png";
import Button from "../../../components/Button/Button";

function Right() {
	const { thongTinPhim, danhSachGheDangChon } = useSelector((state) => state.ticketSlice);
	const renderGhe = () => {
		return danhSachGheDangChon.map((ghe, index) => {
			const { tenGhe, loaiGhe } = ghe;
			const element = (
				<span className="text-slate-200 text-[0.62rem] xl:text-[0.70rem] 2xl:text-[0.72rem]">
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
	return (
		<div className="w-[40%]  flex flex-col items-center px-2 self-stretch">
			<div className="w-[80%] flex-shrink-0 h-[5%] rounded-t-[1rem] border-t-[5px] border-l-[5px] border-r-[5px] border-[rgb(71,85,105)]"></div>
			<div className="flex flex-shrink-0 flex-col justify-between border-[5px] border-[rgb(71,85,105)] w-full h-[10%]  rounded-[0.8rem] z-[1] bg-backgroundHome">
				<div className="ml-auto mr-2 mt-2 right-[10%] top-[10%] w-7 h-7 bg-[rgb(71,85,105)] rounded-full"></div>
				<div className="mx-auto -mb-[6px] w-[75%] h-[30%] bg-gray-300 rounded-t-[0.8rem] border-[5px] border-b-gray-300 border-t-[rgb(71,85,105)] border-r-[rgb(71,85,105)] border-l-[rgb(71,85,105)]  "></div>
			</div>
			<div className="w-[75%] h-[100%] flex flex-col items-center">
				<div className="w-full h-[100%] bg-gray-300 p-2">
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
						<div className="flex flex-wrap gap-2 max-h-[80px] overflow-y-auto">{renderGhe()}</div>
					</div>
				</div>
				<hr className="w-[85%] border-dotted border-2" />
				<div className="w-full h-[30%] bg-gray-300 rounded-lg relative flex items-center justify-center">
					<div className="w-[80%] h-[80%]">
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
				<Button type="primary" size="big" className="w-full">
                    <span className="text-2xl font-bold">Xác nhận</span>
					
				</Button>
			</div>
		</div>
	);
}
export default Right;
