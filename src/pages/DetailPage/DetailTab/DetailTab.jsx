import { Tabs, Tag } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Typography } from "antd";
const { Title } = Typography;
import style from "./DetailTab.module.css";
import _ from "lodash";

const test = () => {
	const movieShowtime = {
		// Dữ liệu của movieShowtime ở đây
		cumRapChieu: [
			{
				lichChieuPhim: [
					{
						ngayChieuGioChieu: "2022-06-27T14:30:00",
					},
				],
				maCumRap: "bhd-star-cineplex-bitexco",
				tenCumRap: "BHD Star Cineplex - Bitexco",
				hinhAnh: null,
			},
			{
				lichChieuPhim: [
					{
						ngayChieuGioChieu: "2022-06-27T14:30:00",
					},
					{
						ngayChieuGioChieu: "2022-07-06T23:30:00",
					},
				],
				maCumRap: "bhd-star-cineplex-vincom-le-van-viet",
				tenCumRap: "BHD Star Cineplex - Vincom Lê Văn Việt",
				hinhAnh: null,
			},
			{
				lichChieuPhim: [
					{
						ngayChieuGioChieu: "2022-09-29T02:00:00",
					},
					{
						ngayChieuGioChieu: "2022-10-28T16:02:00",
					},
				],
				maCumRap: "bhd-star-cineplex-pham-hung",
				tenCumRap: "BHD Star Cineplex - Phạm Hùng",
				hinhAnh: null,
			},
			{
				lichChieuPhim: [
					{
						ngayChieuGioChieu: "2022-09-29T04:00:00",
					},
					{
						ngayChieuGioChieu: "2023-03-24T08:00:00",
					},
				],
				maCumRap: "bhd-star-cineplex-3-2",
				tenCumRap: "BHD Star Cineplex - 3/2",
				hinhAnh: null,
			},
		],
	};

	// Định nghĩa các ngày trong tuần bằng tiếng Việt
	moment.updateLocale("vi", {
		weekdays: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
		weekdaysShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
	});

	// Tạo mảng mới với định dạng yêu cầu
	const formattedArray = _.chain(movieShowtime.cumRapChieu)
		.flatMap((cumRap) =>
			_.map(cumRap.lichChieuPhim, (lichChieuPhim) => ({
				time: {
					date: moment(lichChieuPhim.ngayChieuGioChieu).format("DD/MM/YYYY"),
					dayOfWeek: moment(lichChieuPhim.ngayChieuGioChieu).format("dddd"),
				},
				cumRap: [
					{
						maCumRap: cumRap.maCumRap,
						tenCumRap: cumRap.tenCumRap,
						hinhAnh: cumRap.hinhAnh,
					},
				],
			})),
		)
		.groupBy((item) => item.time.date)
		.map((groupedItems) => ({
			time: groupedItems[0].time,
			cumRap: _.flatMap(groupedItems, (item) => item.cumRap),
		}))
		.sortBy((item) => moment(item.time.date, "DD/MM/YYYY").unix())
		.value();

	console.log(formattedArray);
};

function DetailTab() {
	const { movieShowtime } = useSelector((state) => state.cinemaSlice);
	test();
	// Định nghĩa các ngày trong tuần bằng tiếng Việt
	moment.updateLocale("vi", {
		weekdays: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
		weekdaysShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
	});

	const contentLichChieu = (phim) => {
		return phim.map((item, index) => {
			const time = moment(item.ngayChieuGioChieu).format("hh:MM A");
			return (
				<NavLink to={`/checkout/${item.maLichChieu}`} key={index}>
					<Tag color="green" style={{ margin: 0 }}>
						{time}
					</Tag>
				</NavLink>
			);
		});
	};

	const renderCumRap = (listCumRap) => {
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
						<div className="space-y-2 bg-[#2f2f2f5c] rounded-lg px-5 py-3" key={index}>
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
							<div className="flex gap-2">
								<div className="w-16"></div>
								<div className="grid grid-cols-6 gap-4">{contentLichChieu(cumRap.lichChieuPhim)}</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const renderRap = () => {
		return movieShowtime.heThongRapChieu?.map((cumRapChieu, index) => {
			console.log(cumRapChieu);
			// Tạo mảng mới với định dạng yêu cầu
			const formattedArray = _.chain(cumRapChieu.cumRapChieu)
				.flatMap((cumRap) =>
					_.map(cumRap.lichChieuPhim, (lichChieuPhim) => ({
						time: {
							date: moment(lichChieuPhim.ngayChieuGioChieu).format("DD/MM/YYYY"),
							dayOfWeek: moment(lichChieuPhim.ngayChieuGioChieu).format("dddd"),
						},
						cumRaps: [
							{
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
			console.log(formattedArray);
			return {
				// LOGO RẠP
				label: (
					<div className="flex items-center gap-2">
						<img className="rounded-full w-12" src={cumRapChieu.logo} />
						{/* <Title style={{ margin: 0 }} level={5}>
							{item.tenHeThongRap}
						</Title> */}
					</div>
				),
				key: index,
				// children: renderCumRap(item.cumRapChieu),
				children: (
					<div className="pl-5">
						<Tabs
							defaultActiveKey="1"
							type="card"
							size="large"
							items={formattedArray.map((date, i) => {
								const id = String(i + 1);
								return {
									label: (
										<div className="flex flex-col gap-1 items-center">
											<p>{date.time.dayOfWeek}</p>
											<p>{date.time.date}</p>
										</div>
									),
									key: id,
									children: (
										<div className="">
											{date.cumRaps.map((cum,i) => {
												return <div key={i}>
													<p>tenCumRap: {cum.tenCumRap}</p>
													<p>diaChi: {cum.diaChi}</p>
													<p>hinhAnh: {cum.hinhAnh}</p>
													<p>maCumRap: {cum.maCumRap}</p>
												</div>;
											})}
										</div>
									),
								};
							})}
						/>
					</div>
				),
				// children: tab thứ ngày tháng,
			};
		});
	};

	const renderTabLichChieu = () => {
		return <Tabs style={{ width: "100%", zIndex: 3 }} tabPosition="left" items={renderRap()} />;
	};

	const renderTabContainer = () => {
		return ["Lịch Chiếu", "Thông Tin", "Đánh Giá"].map((item, index) => {
			let content = ``;
			if (index === 0) content = renderTabLichChieu();
			if (index === 1) content = <p>Nội dung Thông tin</p>;
			if (index === 2) content = <p>Nội dung Đánh giá</p>;
			return {
				label: <p className="text-red-400">{item}</p>,
				key: index,
				children: content,
			};
		});
	};
	return (
		<section>
			<div className="container">
				<div className="flex justify-center items-center ">
					<Tabs size="large" tabPosition="top" items={renderTabContainer()} className={`${style.tabs} w-full rounded-2xl border border-white/20 p-2`} />
				</div>
			</div>
		</section>
	);
}
export default DetailTab;

// sắp xếp các phần tử từ bé đến lớn theo ngayChieuGioChieu, và trường hợp có ngayChieuGioChieu giống nhau thì thông tin cumRap sẽ được ghép
// Lưu ý:

// 1. Chúng ta sử dụng moment.updateLocale('vi', ...) để định nghĩa các ngày trong tuần bằng tiếng Việt, tương tự như trước đó.
// 2. Đầu tiên, sử dụng lodash để duyệt qua từng cumRap trong mảng movieShowtime.cumRapChieu và định dạng thông tin theo yêu cầu (thêm vào trường time và mảng cumRap chứa thông tin maCumRap, tenCumRap, hinhAnh).
// 3. Tiếp theo, ta sử dụng groupBy để nhóm các phần tử theo date.
// 4. Sau đó, ta sử dụng map để ghép nhóm các phần tử có cùng date lại thành một object mới, và flatMap để ghép các mảng cumRap lại thành một mảng duy nhất nếu có cùng date.
// 5 Cuối cùng, ta sử dụng sortBy để sắp xếp các phần tử theo date từ bé đến lớn.
// 6. Kết quả sẽ được lưu vào biến formattedArray và được in ra màn hình qua lời gọi console.log(formattedArray).
