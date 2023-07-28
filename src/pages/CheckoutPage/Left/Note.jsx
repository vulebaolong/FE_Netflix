import { Avatar } from "antd";
import Ghe from "./Ghe";
import { useSelector } from "react-redux";

function Note() {
	const { numAvatar } = useSelector((state) => state.userSlices);

	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 mx-auto" style={{ width: "100%" }}>
			{/* Ghế thường */}
			<Ghe type="gheThuong" note="Ghế thường" />

			{/* Ghế Vip */}
			<Ghe type="gheVip" note="Ghế vip" />

			{/* Ghế bạn chọn */}
			<Ghe
				type="gheDangChon"
				note="Ghế bạn chọn"
				element={
					<span className="text-slate-200 text-[0.4rem] sm:text-[0.62rem] xl:text-[0.70rem] 2xl:text-[0.72rem]">
						<strong>A01</strong>
					</span>
				}
			/>

			{/* Ghế người khác chọn */}
			<Ghe type="gheDangChon" note="Ghế người khác chọn" element={<i className="fa-solid fa-user text-slate-200"></i>} />

			{/* Ghế đã mua */}
			<Ghe
				type="gheDuocMua"
				note="Ghế người khác mua"
				element={
					<strong>
						<i className="fa-solid fa-x text-slate-200"></i>
					</strong>
				}
			/>

			{/* Ghế đã mua */}
			<Ghe
				type="gheDaMua"
				note="Ghế bạn mua"
				element={
					<Avatar
						src={`https://i.pravatar.cc/150?img=${numAvatar}`}
						className="w-[1rem] h-[1rem]
                        sm:w-4 sm:h-4
                        md:w-4 md:h-4
                        lg:w-4 lg:h-4
                        xl:w-5 xl:h-5
                        2xl:w-6 2xl:h-6
                        "
					/>
				}
			/>
		</div>
	);
}
export default Note;
