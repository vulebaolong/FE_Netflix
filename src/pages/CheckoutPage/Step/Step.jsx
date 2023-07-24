import { Steps } from "antd";
import { useSelector } from "react-redux";

function Step() {
	const { danhSachGheDangChon, thanhToan, isDatVe } = useSelector((state) => state.ticketSlice);
	const createCurrentStep = () => {
		if (isDatVe) return 3;
		if (+thanhToan > 0) return 2;
		if (danhSachGheDangChon.length !== 0) return 1;
		return 0;
	};
	return (
		<div className="container">
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
		</div>
	);
}
export default Step;
