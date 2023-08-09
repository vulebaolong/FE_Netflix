import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaSystemMID } from "../../../redux/slices/cinemaSlice";
import moment from "moment";
import { Tabs, Tag } from "antd";
import { NavLink } from "react-router-dom";

function Cinema() {
	const dispatch = useDispatch();
	const { cinemaSystem } = useSelector((state) => state.cinemaSlice);
	useEffect(() => {
		dispatch(getCinemaSystemMID());
	}, []);

	const renderListMovie = (danhSachPhim, diaChi) => {
		const contentLichChieu = (movie) => {
			return movie.lichChieuTheoPhim.map((item, index) => {
				const time = moment(item.ngayChieuGioChieu).format("hh:MM A");
				return (
					<NavLink to={`/checkout/${item._id}`} key={index}>
						<Tag color="green" style={{ margin: 0 }}>
							{time}
						</Tag>
					</NavLink>
				);
			});
		};
		const contentPhim = () =>
			danhSachPhim.map((phim, index) => {
				return (
					<div className="p-5" key={index}>
						<div className="space-y-3">
							<div className="flex gap-2 items-center">
								<div
									className="flex flex-shrink-0 w-10 h-10 sm:w-16 sm:h-16 items-center bg-cover bg-no-repeat bg-center rounded-md"
									style={{
										backgroundImage: `url('${phim.hinhAnh}'), url('https://picsum.photos/64')`,
									}}
								></div>
								<div className="flex self-stretch flex-col justify-between whitespace-normal w-[60%]">
									<strong className="text-lg truncate">{phim.tenPhim}</strong>
									<p className="m-0 font-medium truncate">{diaChi}</p>
								</div>
							</div>
							<div className="flex gap-2">
								<div className="w-16"></div>
								<div
									className="grid grid-cols-3 gap-4
									md:grid-cols-2
									lg:grid-cols-3
									xl:grid-cols-5
									2xl:grid-cols-6
									"
								>
									{contentLichChieu(phim)}
								</div>
							</div>
						</div>
					</div>
				);
			});
		return (
			<div className=" overflow-auto divide-y divide-slate-400/25 max-h-[270px] sm:max-h-[260px] md:max-h-[465px] border border-slate-700 md:border-0 rounded-md">
				{contentPhim()}
			</div>
		);
	};

	const remderGroupCinema = (listCumRap) => {
		const labelCumRap = (cumRap) => {
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
				<div className="flex gap-2 items-center px-2 py-1 hover:bg-[#2f2f2f5c] active:bg-[#2f2f2fb5] transition">
					<div className="flex w-10 sm:w-14 items-center rounded-md overflow-hidden">
						<img className="w-full" src={cumRap.hinhAnh} />
					</div>
					<div
						className="text-start whitespace-normal
						w-[150px]
						md:w-[150px]
						lg:w-[230px]
						xl:w-[300px]
						2xl:w-[350px]
						"
					>
						<p className="m-0 truncate">
							<span
								className="font-semibold 
								text-base
								xl:text-lg
								"
								style={{ color: color() }}
							>
								{tenRap}
							</span>
							<span> - {tenCumRap}</span>
						</p>
						<p className=" font-semibold m-0 truncate">{cumRap.diaChi}</p>
						<p className="m-0">Chi Tiết</p>
					</div>
				</div>
			);
		};
		const items = listCumRap.map((cumRap, index) => {
			return {
				label: labelCumRap(cumRap),
				key: index,
				children: renderListMovie(cumRap.danhSachPhim, cumRap.diaChi),
			};
		});
		return (
			<>
				<Tabs  tabPosition="left" items={items} className="hidden md:flex max-h-[465px]" />
				<Tabs  tabPosition="top" items={items} className="flex md:hidden max-h-[465px]" />
			</>
		);
	};

	const renderCinema = () => {
		return cinemaSystem.map((item, index) => {
			return {
				label: <img className="rounded-full w-12" src={item.logo} />,
				key: index,
				children: remderGroupCinema(item.lstCumRap),
			};
		});
	};

	return (
		<section
			className="cinema py-24 bg-backgroundHome
			
			"
		>
			<div className="container">
				<h2
					className="font-black  leading-none
                            text-base text-center mb-16
                            sm:text-2xl 
                            md:text-3xl
                            lg:text-4xl
                            "
				>
					Rạp chiếu phim
				</h2>
				<div className="rounded-lg border border-slate-700 py-2 px-2 md:px-0 ">
					<Tabs className="hidden md:flex" tabPosition="left" items={renderCinema()} style={{ height: "465px" }} />
					<Tabs className="flex md:hidden" tabPosition="top" items={renderCinema()} style={{ height: "465px" }} />
				</div>
			</div>
		</section>
	);
}
export default Cinema;
