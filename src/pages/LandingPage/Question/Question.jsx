import React from "react";
import StartWithEmail from "../../../components/StartWithEmail/StartWithEmail";

import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
	{
		key: "1",
		label: <p className="text-white text-2xl font-semibold">Netflix là gì?</p>,
		children: (
			<p className="text-white text-2xl font-semibold">
				Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng
				nghìn thiết bị có kết nối Internet.
				<br /> <br /> Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có
				những nội dung mới để bạn khám phá và những chương trình truyền hình, phim mới được bổ sung mỗi tuần!
			</p>
		),
	},
	{
		key: "2",
		label: <p className="text-white text-2xl font-semibold">Tôi phải trả bao nhiêu tiền để xem Netflix?</p>,
		children: (
			<p className="text-white text-2xl font-semibold">
				Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng. Các
				gói dịch vụ với mức giá từ 70.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.
			</p>
		),
	},
	{
		key: "3",
		label: <p className="text-white text-2xl font-semibold">Tôi có thể xem ở đâu?</p>,
		children: (
			<p className="text-white text-2xl font-semibold">
				Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có kết nối
				Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game.{" "}
				<br /> <br />
				Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS, Android hoặc Windows 10. Vào phần nội dung đã tải xuống để xem trong khi di chuyển và
				khi không có kết nối Internet. Mang Netflix theo bạn đến mọi nơi.
			</p>
		),
	},
	{
		key: "4",
		label: <p className="text-white text-2xl font-semibold">Làm thế nào để hủy?</p>,
		children: (
			<p className="text-white text-2xl font-semibold">
				Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí hủy –
				bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.
			</p>
		),
	},
	{
		key: "5",
		label: <p className="text-white text-2xl font-semibold">Tôi có thể xem gì trên Netflix?</p>,
		children: (
			<p className="text-white text-2xl font-semibold">
				Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung
				khác. Xem không giới hạn bất cứ lúc nào bạn muốn.
			</p>
		),
	},
	{
		key: "6",
		label: <p className="text-white text-2xl font-semibold">Netflix có phù hợp cho trẻ em không?</p>,
		children: (
			<p className="text-white text-2xl font-semibold">
				Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương trình phù
				hợp cho gia đình tại không gian riêng. <br /> <br />
				Hồ sơ Trẻ em đi kèm tính năng kiểm soát của cha mẹ (được bảo vệ bằng mã PIN), cho phép bạn giới hạn độ tuổi cho nội dung con mình được phép xem, cũng như chặn những
				phim hoặc chương trình mà bạn không muốn các em nhìn thấy.
			</p>
		),
	},
];

function Question() {
	return (
		<>
			<div className="container">
				<h2 className="text-5xl font-black text-center  ">Câu hỏi thường gặp</h2>
				<Collapse
					className="mt-10"
					size="large"
					accordion
					items={items}
					expandIcon={({ isActive }) => <CaretRightOutlined style={{ fontSize: "20px" }} rotate={isActive ? 90 : 0} />}
				/>
			</div>
			<div className="container mt-6 h-full flex flex-col justify-center items-center">
				<StartWithEmail />
			</div>
		</>
	);
}

export default Question;
