import { Tabs } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { Typography } from "antd";
const { Title } = Typography;
import _ from "lodash";
import { navigate } from "../../../App";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

function DetailTab() {
	const location = useLocation();
	const { movieDetail } = useSelector((state) => state.detailSlice);

	// Cuộn xuống "detailTab" chỉ khi trang có "hash" là "detailTab"
	useEffect(() => {
		console.log(location.hash);
		if (location.hash === "#detailTab") {
			scroller.scrollTo("detailTab", {
				smooth: true,
				duration: 500,
			});
		}
	}, [location]);

	// Định nghĩa các ngày trong tuần bằng tiếng Việt
	moment.updateLocale("vi", {
		weekdays: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
		weekdaysShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
	});

	const renderCumRap = (listCumRap) => {
		console.log("listCumRap", listCumRap);
		return (
			<div className="space-y-3">
				{listCumRap.map((cumRap, index) => {
					const arrTen = cumRap.tenCumRap.split("-");
					const tenRap = arrTen[0].trim();
					const tenCumRap = arrTen[1].trim();
					const color = () => {
						if (tenRap === "BHD Star Cineplex") return "#81ff81";
						if (tenRap === "CGV") return "red";
						if (tenRap === "CNS") return "#83fef4";
						if (tenRap === "GLX") return "orange";
						if (tenRap === "Lotte") return "#ff4c4c";
						if (tenRap === "MegaGS") return "gold";
					};
					return (
						<div
							className="space-y-2 hover:bg-[#2f2f2f5c] active:bg-[#2f2f2fb5] transition cursor-pointer rounded-lg px-5 py-3"
							key={index}
							onClick={() => {
								navigate(`/checkout/${cumRap.maLichChieu}`);
							}}
						>
							<div className="flex gap-2 rounded-lg items-center  ">
								<div className="flex w-14 items-center flex-shrink-0">
									<img className="w-full" src={cumRap.hinhAnh} />
								</div>
								<div className="text-start flex-grow overflow-hidden">
									<p className="m-0 truncate flex items-baseline">
										<span
											className="font-extrabold 
											text-base
											xl:text-xl
											"
											style={{ color: color() }}
										>
											{tenRap}
											<span className="font-medium text-sm text-white"> - {tenCumRap}</span>
										</span>
									</p>
									<p className=" font-semibold m-0 truncate text-white">{cumRap.diaChi}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const renderTabTime = (formattedArray) => {
		const renderContentTime = (formattedArray) => {
			return formattedArray.map((date, i) => {
				const id = String(i + 1);
				return {
					label: (
						<div className="flex flex-col gap-1 items-center">
							<p>{date.time.dayOfWeek}</p>
							<p>{date.time.date}</p>
						</div>
					),
					key: id,
					children: renderCumRap(date.cumRaps),
				};
			});
		};
		return (
			<div className="pl-5">
				<Tabs defaultActiveKey="1" type="card" size="large" items={renderContentTime(formattedArray)} />
			</div>
		);
	};

	const renderRap = () => {
		return movieDetail.heThongRapChieu?.map((cumRapChieu, index) => {
			const formattedArray = _.chain(cumRapChieu.cumRapChieu)
				.flatMap((cumRap) =>
					_.map(cumRap.lichChieuPhim, (lichChieuPhim) => ({
						time: {
							date: moment(lichChieuPhim.ngayChieuGioChieu).format("DD/MM/YYYY"),
							dayOfWeek: moment(lichChieuPhim.ngayChieuGioChieu).format("dddd"),
						},
						cumRaps: [
							{
								maLichChieu: lichChieuPhim.maLichChieu,
								maCumRap: cumRap.maCumRap,
								tenCumRap: cumRap.tenCumRap,
								hinhAnh: cumRap.hinhAnh,
								diaChi: cumRap.diaChi,
							},
						],
					})),
				)
				.groupBy((item) => item.time.date)
				.map((groupedItems) => ({
					time: groupedItems[0].time,
					cumRaps: _.flatMap(groupedItems, (item) => item.cumRaps),
				}))
				.sortBy((item) => moment(item.time.date, "DD/MM/YYYY").unix())
				.value();
			return {
				// LOGO RẠP
				label: (
					<div className="flex items-center gap-2 p-2 hover:bg-[#2f2f2f5c] active:bg-[#2f2f2fb5] transition">
						<img className="rounded-full w-12" src={cumRapChieu.logo} />
						<Title className="hidden md:block" style={{ margin: 0 }} level={5}>
							{cumRapChieu.tenHeThongRap}
						</Title>
					</div>
				),
				key: index,
				children: renderTabTime(formattedArray),
				// children: tab thứ ngày tháng,
			};
		});
	};

	const renderTabLichChieu = () => {
		return <Tabs style={{ width: "100%", zIndex: 3 }} tabPosition="left" items={renderRap()} />;
	};

	const renderThongTinPhim = () => {
		return (
			<div className="grid grid-cols-2 gap-4 p-3 text-base">
				<div className="space-y-2">
					<p>
						<span className="text-[#777]">Ngày khởi chiếu: </span>
						<span>{moment(movieDetail.ngayKhoiChieu).format("DD/MM/YYYY")}</span>
					</p>
					<p>
						<span className="text-[#777]">Nội dung: </span>
						<span>{movieDetail.moTa}</span>
					</p>
				</div>
				<div className="space-y-2">
					<p>
						<span className="text-[#777]">Tác giả: </span>
						<span>Trần Quang Sĩ</span>
					</p>
					<p>
						<span className="text-[#777]">Diễn viên: </span>
						<span>Trần Quang Sĩ, </span>
						<span>Vũ Lê Bảo Long, </span>
						<span>Nguyễn Thị Huỳnh Nhi, </span>
						<span>Đinh Duy Phương, </span>
						<span>Lưu Minh Tiến, </span>
						<span>Trương Tấn Khải, </span>
						<span>Lê Quang Song, </span>
					</p>
					<p>
						<span className="text-[#777]">Thể loại: </span>
						<span>Phim truyền hình chính kịch, </span>
						<span>Phim truyền hình chuyển thể từ sách, </span>
						<span>Phim truyền hình hành động và phiêu lưu, </span>
						<span>Chương trình truyền hình giả tưởng, </span>
					</p>
					<p>
						<span className="text-[#777]">Xếp hạng độ tuổi: </span>
						<span>Bạo lực, </span>
						<span>Tình dục, </span>
						<span>Khoả thân, </span>
						<span>Chất gây nghiện, </span>
						<span>Chất kích thích, </span>
					</p>
				</div>
			</div>
		);
	};

	const renderTabContainer = () => {
		return ["Lịch Chiếu", "Thông Tin"].map((item, index) => {
			let content = ``;
			if (index === 0) content = renderTabLichChieu();
			if (index === 1) content = renderThongTinPhim();
			return {
				label: <p className="text-xl font-bold">{item}</p>,
				key: index,
				children: content,
			};
		});
	};
	return (
		<section className="py-24" id="detailTab">
			<div className="container">
				<div className="flex justify-center items-center ">
					<Tabs centered type="card" size="large" tabPosition="top" items={renderTabContainer()} className={`w-full rounded-2xl border border-white/20 p-2`} />
				</div>
			</div>
		</section>
	);
}
export default DetailTab;

// sắp xếp các phần tử từ bé đến lớn theo ngayChieuGioChieu, và trường hợp có ngayChieuGioChieu giống nhau thì thông tin cumRap sẽ được ghép
// Lưu ý:

// 1. Chúng ta sử dụng moment.updateLocale('vi', ...) để định nghĩa các ngày trong tuần bằng tiếng Việt, tương tự như trước đó.
// 2. Đầu tiên, sử dụng lodash để duyệt qua từng cumRap trong mảng movieDetail.cumRapChieu và định dạng thông tin theo yêu cầu (thêm vào trường time và mảng cumRap chứa thông tin maCumRap, tenCumRap, hinhAnh).
// 3. Tiếp theo, ta sử dụng groupBy để nhóm các phần tử theo date.
// 4. Sau đó, ta sử dụng map để ghép nhóm các phần tử có cùng date lại thành một object mới, và flatMap để ghép các mảng cumRap lại thành một mảng duy nhất nếu có cùng date.
// 5 Cuối cùng, ta sử dụng sortBy để sắp xếp các phần tử theo date từ bé đến lớn.
