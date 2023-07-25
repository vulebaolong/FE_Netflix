import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoAccountMID } from "../../redux/slices/userSlices";
import BackgroundImg from "../../components/BackgroundImg/BackgroundImg";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import moment from "moment";
import Ghe from "../CheckoutPage/Left/Ghe";
import ButtonMe from "../../components/Button/Button";
import imgBackground from "../../assets/imgBackground/VN_vi_website_large.jpg"

function HistoryPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getInfoAccountMID());
	}, []);
	const { infoTicket } = useSelector((state) => state.userSlices);
	console.log(infoTicket);

	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
	const searchInput = useRef(null);
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};
	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText("");
	};
	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div
				style={{
					padding: 8,
				}}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: "block",
					}}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{
							width: 90,
						}}
					>
						Search
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters)}
						size="small"
						style={{
							width: 90,
						}}
					>
						Reset
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							confirm({
								closeDropdown: false,
							});
							setSearchText(selectedKeys[0]);
							setSearchedColumn(dataIndex);
						}}
					>
						Filter
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							close();
						}}
					>
						close
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? "#1677ff" : undefined,
				}}
			/>
		),
		onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: "#ffc069",
						padding: 0,
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			),
	});
	const columns = [
		{
			title: "Mã vé",
			width: "10%",
			...getColumnSearchProps("maVe"),
			sorter: (a, b) => a.maVe - b.maVe,
			sortDirections: ["descend", "ascend"],
			render: (record) => {
				return <p className="font-bold">{record.maVe}</p>;
			},
		},
		{
			title: "Hình",
			width: "10%",
			render: (record) => {
				return (
					<div className="w-20">
						<img className="rounded-xl w-full h-full object-cover" src={record.hinhAnh} alt="" />
					</div>
				);
			},
		},
		{
			title: "Tên Phim",
			width: "20%",
			...getColumnSearchProps("tenPhim"),
			render: (record) => {
				return <p className="text-lg font-bold">{record.tenPhim}</p>;
			},
		},
		{
			title: "Ngày đặt",
			width: "10%",
			...getColumnSearchProps("ngayDat"),
			render: (record) => <span>{moment(record.ngayDat).format("DD/MM/YYYY")}</span>,
		},
		{
			title: "Ghế đã đặt",
			width: "30%",
			render: (record) => {
				return (
					<div className="flex flex-wrap gap-2 max-h-[64px] overflow-y-auto">
						{record.danhSachGhe.map((ghe, index) => {
							const { tenGhe } = ghe;
							const element = (
								<span className="text-slate-200 text-[0.62rem] xl:text-[0.70rem] 2xl:text-[0.72rem]">
									<strong>{tenGhe}</strong>
								</span>
							);

							return <Ghe type={"gheDangChon"} element={element} key={index} />;
						})}
					</div>
				);
			},
		},
		// {
		// 	title: "Thao tác",
		// 	width: "10%",
		// 	render: (record) => {
		// 		console.log(record);
		// 		return (
		// 			<div className="">
		// 				<ButtonMe type="primary" size="small">
		// 					Mua thêm
		// 				</ButtonMe>
		// 			</div>
		// 		);
		// 	},
		// },
	];
	return (
		<section
			className=" pt-header relative
            sm:pt-header_sm
            md:pt-header_md
            lg:pt-header_lg
            xl:pt-header_xl
            2xl:pt-header_2xl
			"
		>
			{/* BACKGROUND IMG */}
			{/* <BackgroundImg img={imgBackground} filter/> */}
			<div className="container relative py-24">
				<h1 className="text-center heading-1 mb-14">Thông tin đặt vé</h1>
				<Table
					rowKey={(record) => {
						return record.maVe;
					}}
					columns={columns}
					dataSource={infoTicket}
				/>
			</div>
		</section>
	);
}
export default HistoryPage;
