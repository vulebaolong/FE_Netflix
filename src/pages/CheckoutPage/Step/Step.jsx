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
			<Steps
			className="mb-10 sm:mb-20"
				current={createCurrentStep()}
				items={[
					{
						title: <strong className="sm:text-xs lg:text-lg xl:text-xl 2xl:text-2xl">CHỌN GHẾ</strong>,
					},
					{
						title: <strong className="sm:text-xs lg:text-lg xl:text-xl 2xl:text-2xl">CHỌN THANH TOÁN</strong>,
						// description: "Chọn thanh toán",
					},
					{
						title: <strong className="sm:text-xs lg:text-lg xl:text-xl 2xl:text-2xl">KẾT QUẢ ĐẶT VÉ</strong>,
					},
				]}
			/>
	);
}
export default Step;
