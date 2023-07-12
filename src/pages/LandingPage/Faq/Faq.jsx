import { RightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import StartWithMail from "../../../components/StartWithMail/StartWithMail";
const faq = {
	faq1: {
		label: `Netflix là gì?`,
		text: () => {
			return (
				<div className="">
					<p className="text-2xl font-medium">
						Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác
						trên hàng nghìn thiết bị có kết nối Internet.
					</p>
					<br />
					<p className="text-2xl font-medium">
						Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có những
						nội dung mới để bạn khám phá và những chương trình truyền hình, phim mới được bổ sung mỗi tuần!
					</p>
				</div>
			);
		},
	},
	faq2: {
		label: `Tôi phải trả bao nhiêu tiền để xem Netflix?`,
		text: () => {
			return (
				<div className="">
					<p className="text-2xl font-medium">
						Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng
						tháng. Các gói dịch vụ với mức giá từ 260.000 ₫ đến 70.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.
					</p>
				</div>
			);
		},
	},
	faq3: {
		label: `Tôi có thể xem ở đâu?`,
		text: () => {
			return (
				<div className="">
					<p className="text-2xl font-medium">
						Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có
						kết nối Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy
						chơi game.
					</p>
					<br />
					<p className="text-2xl font-medium">
						Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS, Android hoặc Windows 10. Vào phần nội dung đã tải xuống để xem trong khi di
						chuyển và khi không có kết nối Internet. Mang Netflix theo bạn đến mọi nơi.
					</p>
				</div>
			);
		},
	},
	faq4: {
		label: `Làm thế nào để hủy?`,
		text: () => {
			return (
				<div className="">
					<p className="text-2xl font-medium">
						Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí
						hủy – bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.
					</p>
				</div>
			);
		},
	},
	faq5: {
		label: `Tôi có thể xem gì trên Netflix?`,
		text: () => {
			return (
				<div className="">
					<p className="text-2xl font-medium">
						Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội
						dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn.
					</p>
				</div>
			);
		},
	},
	faq6: {
		label: `Netflix có phù hợp cho trẻ em không?`,
		text: () => {
			return (
				<div className="">
					<p className="text-2xl font-medium">
						Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương
						trình phù hợp cho gia đình tại không gian riêng.
					</p>
					<br />
					<p className="text-2xl font-medium">
						Hồ sơ Trẻ em đi kèm tính năng kiểm soát của cha mẹ (được bảo vệ bằng mã PIN), cho phép bạn giới hạn độ tuổi cho nội dung con mình được phép xem, cũng như
						chặn những phim hoặc chương trình mà bạn không muốn các em nhìn thấy.
					</p>
				</div>
			);
		},
	},
};
const items = [
	{
		key: "1",
		label: <p className="text-2xl font-medium">{faq.faq1.label}</p>,
		children: faq.faq1.text(),
	},
	{
		key: "2",
		label: <p className="text-2xl font-medium">{faq.faq2.label}</p>,
		children: faq.faq2.text(),
	},
	{
		key: "3",
		label: <p className="text-2xl font-medium">{faq.faq3.label}</p>,
		children: faq.faq3.text(),
	},
	{
		key: "4",
		label: <p className="text-2xl font-medium">{faq.faq4.label}</p>,
		children: faq.faq4.text(),
	},
	{
		key: "5",
		label: <p className="text-2xl font-medium">{faq.faq5.label}</p>,
		children: faq.faq5.text(),
	},
	{
		key: "6",
		label: <p className="text-2xl font-medium">{faq.faq6.label}</p>,
		children: faq.faq6.text(),
	},
];

function Faq() {
	const onChange = (key) => {
		console.log(key);
	};
	return (
		<section className="py-16">
			<div className="container">
				<Collapse
					items={items}
					accordion
					onChange={onChange}
					size="large"
					expandIcon={({ isActive }) => <RightOutlined style={{ fontSize: 20 }} rotate={isActive ? 90 : 0} />}
				/>
				<div className="mt-[2.85rem]">
					<StartWithMail />
				</div>
			</div>
		</section>
	);
}
export default Faq;
