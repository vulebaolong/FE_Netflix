import Chairs from "./Chairs";
import style from "../CheckoutPage.module.css";
import Note from "./Note";
import { Steps } from "antd";
import { useSelector } from "react-redux";

function Left() {
	const { danhSachGheDangChon, thanhToan, isDatVe } = useSelector((state) => state.ticketSlice);
	const createCurrentStep = () => {
		if (isDatVe) return 3;
		if (+thanhToan > 0) return 2;
		if (danhSachGheDangChon.length !== 0) return 1;
		return 0;
	};
	return (
		<div className="container">
			<div className="flex flex-col items-center">
				<Steps
					current={createCurrentStep()}
					items={[
						{
							title: <strong>CHỌN GHẾ</strong>,
						},
						{
							title: <strong>THANH TOÁN</strong>,
							description: "Chọn thanh toán",
						},
						{
							title: <strong>KẾT QUẢ ĐẶT VÉ</strong>,
						},
					]}
				/>
				<div className={`${style.screen} w-2/3 bg-slate-600 shadow-lg flex items-end justify-center mb-20`}>
					<span className="text-white">Màn hình</span>
				</div>

				<div className="space-y-10">
					<Chairs />
					<Note />
				</div>
			</div>
		</div>
	);
}
export default Left;
