import { Tabs } from "antd";
import imgDienAnh1 from "../../../assets/media/dienanh/1.png";
import imgDienAnh2 from "../../../assets/media/dienanh/2.png";
import imgDienAnh3 from "../../../assets/media/dienanh/3.png";
import imgDienAnh4 from "../../../assets/media/dienanh/4.png";
import imgDienAnh5 from "../../../assets/media/dienanh/5.png";
import imgDienAnh6 from "../../../assets/media/dienanh/6.png";
import imgDienAnh7 from "../../../assets/media/dienanh/7.png";
import imgDienAnh8 from "../../../assets/media/dienanh/8.png";

import imgKhuyenMai1 from "../../../assets/media/khuyenmai/1.jpg";
import imgKhuyenMai2 from "../../../assets/media/khuyenmai/2.jpg";
import imgKhuyenMai3 from "../../../assets/media/khuyenmai/3.jpg";
import imgKhuyenMai4 from "../../../assets/media/khuyenmai/4.jpg";
import imgKhuyenMai5 from "../../../assets/media/khuyenmai/5.jpg";
import imgKhuyenMai6 from "../../../assets/media/khuyenmai/6.jpg";
import imgKhuyenMai7 from "../../../assets/media/khuyenmai/7.jpg";
import imgKhuyenMai8 from "../../../assets/media/khuyenmai/8.jpg";

import imgDanhGia1 from "../../../assets/media/danhgia/1.png";
import imgDanhGia2 from "../../../assets/media/danhgia/2.png";
import imgDanhGia3 from "../../../assets/media/danhgia/3.png";
import imgDanhGia4 from "../../../assets/media/danhgia/4.png";
import imgDanhGia5 from "../../../assets/media/danhgia/5.png";
import imgDanhGia6 from "../../../assets/media/danhgia/6.png";
import imgDanhGia7 from "../../../assets/media/danhgia/7.png";
import imgDanhGia8 from "../../../assets/media/danhgia/8.png";

function Media() {
	const renderDienAnh = () => {
		return (
			<div className="flex flex-col gap-10 pb-5 px-5">
				<div
					className="grid grid-cols-1 gap-10
					md:grid-cols-2
					"
				>
					<div className="overflow-hidden">
						<div className="w-full h-[300px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgDienAnh1} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">TENET công bố ngày khởi chiếu chính thức tại Việt Nam</div>
						<p className="mt-3 text-base">
							Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ,
							trong đó có Việt Nam.
						</p>
					</div>
					<div className="overflow-hidden">
						<div className="w-full h-[300px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgDienAnh2} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</div>
						<p className="mt-3 text-base">
							Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ thời hiện đại.
						</p>
					</div>
				</div>
				<div
					className="grid grid-cols-1 gap-10
					lg:grid-cols-3
					"
				>
					<div className="overflow-hidden">
						<div className="w-full h-[200px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgDienAnh3} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">Gerard Butler cùng bồ cũ Deadpool tham gia Greenland</div>
						<p className="mt-3 text-base">
							Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội
							dung cốt truyện, dàn
						</p>
					</div>
					<div className="overflow-hidden">
						<div className="w-full h-[200px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgDienAnh4} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">Diễn viên đặc biệt của Bằng Chứng Vô Hình</div>
						<p className="mt-3 text-base">
							Bằng Chứng Vô Hình tiết lộ thêm với khán giả một diễn viên vô cùng đặc biệt, đi diễn như đi chơi và không hề nghe theo sự chỉ đạo của đạo
						</p>
					</div>
					<div className="flex flex-col gap-5 justify-between">
						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgDienAnh5} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!</p>
						</div>

						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgDienAnh6} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!</p>
						</div>

						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgDienAnh7} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">RÒM tung trailer hé lộ cuộc sống của dân chơi số đề</p>
						</div>

						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgDienAnh8} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
	const renderKhuyenMai = () => {
		return (
			<div className="flex flex-col gap-10 pb-5 px-5">
				<div
					className="grid grid-cols-1 gap-10
					md:grid-cols-2"
				>
					<div className="overflow-hidden">
						<div className="w-full h-[300px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgKhuyenMai1} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">Vào thứ 3 hàng tuần - Happy Day, Galaxy Cinema dành tặng giá vé ưu đãi CHỈ TỪ 50K!</div>
						<p className="mt-3 text-base">
							Khách hàng thành viên thân thiết của MOVI có đơn hàng mua sắm trả góp hoặc ứng tiền từ 3.000.000đ sẽ nhận được 01 Bộ dao cao cấp từ MOVI.
						</p>
					</div>
					<div className="overflow-hidden">
						<div className="w-full h-[300px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgKhuyenMai2} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">Ưu Đãi Tết: Quà Tặng Tới 450K</div>
						<p className="mt-3 text-base">
							Ưu đãi giảm giá trực tiếp: Nhập mã MOVITET2023 được giảm ngay 50.000 VNĐ trên đơn hàng vé máy bay (giá đã bao gồm các khoản phí của Vietjet và MOVI).
						</p>
					</div>
				</div>
				<div
					className="grid grid-cols-1 gap-10
					lg:grid-cols-3"
				>
					<div className="overflow-hidden">
						<div className="w-full h-[200px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgKhuyenMai3} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">Tung hoành rạp Lotte Cinema cả tuần chỉ 79.000Đ/vé</div>
						<p className="mt-3 text-base">
							Khách hàng có đơn đặt hàng mua sắm sản phẩm (*) thành công của thương hiệu Samsung nhận ngay Combo quà tựu trường gồm Nón kết và Balo MOVI
						</p>
					</div>
					<div>
						<div className="w-full h-[200px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgKhuyenMai4} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">Mua thẻ vip săn quà cực đỉnh</div>
						<p className="mt-3 text-base ">Khách hàng mua ĐTDĐ có trị giá từ 5 triệu nhận ngay bộ chăn chần MOVI.</p>
					</div>
					<div className="flex flex-col gap-5 justify-between">
						<div className="flex gap-3  items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgKhuyenMai5} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Deal công nghê cho sinh viên</p>
						</div>

						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgKhuyenMai6} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Vui hè mê ly</p>
						</div>

						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgKhuyenMai7} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Vui hè ngao du - bay không phải nghĩ</p>
						</div>

						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgKhuyenMai8} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Đón lễ cực sung - trúng vàng cực khủng</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
	const renderDanhGia = () => {
		return (
			<div className="flex flex-col gap-10 pb-5 px-5">
				<div
					className="grid grid-cols-1 gap-10
					md:grid-cols-2"
				>
					<div className="">
						<div className="w-full h-[300px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgDanhGia1} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">[REVIEW] Săn Lùng (Hunt)</div>
						<p className="mt-3 text-base">
							Sau thành công đình đám của Squid Game, Lee Jung Jae đã chọn Săn Lùng (Hunt) là một bước ngoặt lớn trong sự nghiệp khi thử sức với vai trò mới vừa là
							đạo diễn cũng vừa là biên kịch. Săn Lùng là một bộ phim có đề tài khó nhằn vì nó đòi hỏi sự am hiểu về lịch sử và chính trị rất cao, đây là lí do ...
						</p>
					</div>
					<div className="">
						<div className="w-full h-[300px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgDanhGia2} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">[REVIEW] Hạnh Phúc Máu</div>
						<p className="mt-3 text-base">
							Điện ảnh Việt trong thời gian gần đây có vẻ rất ưa chuộng thể loại kinh dị pha lẫn giật gân. Hạnh Phúc Máu tiếp tục là một tác phẩm như thế với câu
							chuyện về một gia tộc bí ẩn. Bộ phim là đứa con tinh thần đầu tiên của Dược sĩ Tiến khi bước chân vào sân chơi điện ảnh. Được đầu tư sản xuất mạnh tay,
							thế nhưng ...
						</p>
					</div>
				</div>
				<div
					className="grid grid-cols-1 gap-10
					lg:grid-cols-3"
				>
					<div>
						<div className="w-full h-[200px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgDanhGia3} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">[REVIEW] Dinh Thự Oan Khuất (Ghost Of War)</div>
						<p className="mt-3 text-base">Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!</p>
					</div>
					<div>
						<div className="w-full h-[200px]">
							<img className="rounded-lg w-full h-full object-cover" src={imgDanhGia4} alt="" />
						</div>
						<div className="font-medium text-2xl mt-2">The Menu (Thực Đơn Bí Ẩn) - Ý nghĩa đằng sau các món ăn</div>
						<p className="mt-3 text-base ">
							Vào cuối tuần qua, The Menu (Thực Đơn Bí Ẩn) đã chính thức ra rạp Việt Nam sau nhiều lần úp mở về sự xuất hiện của mình ở phòng vé Việt...
						</p>
					</div>
					<div className="flex flex-col gap-5 justify-between">
						<div className="flex gap-3  items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgDanhGia5} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p>
						</div>

						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgDanhGia6} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
						</div>

						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgDanhGia7} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công</p>
						</div>

						<div className="flex gap-3 items-center justify-between">
							<div className="w-[70px] h-[70px] flex-shrink-0">
								<img className="rounded-lg w-full h-full object-cover" src={imgDanhGia8} alt="" />
							</div>
							<p className="font-semibold text-base flex-grow">Ngô Thanh Vân Chính Thức Khởi Động</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
	const renderTabContainer = () => {
		return ["Diện ảnh 24h", "Khuyến mãi", "Đánh giá"].map((item, index) => {
			let content = ``;
			if (index === 0) content = renderDienAnh();
			if (index === 1) content = renderKhuyenMai();
			if (index === 2) content = renderDanhGia();
			return {
				label: (
					<p
						className="text-sm font-bold
						sm:text-lg
						md:text-xl
						"
					>
						{item}
					</p>
				),
				key: index,
				children: content,
			};
		});
	};
	return (
		<section className="container py-24">
			<Tabs centered size="large" tabPosition="top" items={renderTabContainer()} className={`w-full rounded-2xl p-2`} />
		</section>
	);
}
export default Media;
