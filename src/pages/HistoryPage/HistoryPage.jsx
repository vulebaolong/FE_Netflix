import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoAccountMID } from "../../redux/slices/userSlices";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import moment from "moment";
import Ghe from "../CheckoutPage/Left/Ghe";

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
			...getColumnSearchProps("maVe"),
			sorter: (a, b) => a.maVe - b.maVe,
			sortDirections: ["descend", "ascend"],
			render: (record) => {
				return <p className="font-bold">{record.maVe}</p>;
			},
			className: "hidden lg:w-[10%] lg:table-cell dark:bg-gray-800/50 backdrop-blur-sm"
		},
		{
			title: "Hình",
			render: (record) => {
				return (
					<div className="w-20">
						<img className="rounded-xl w-full h-full object-cover" src={record.hinhAnh} alt="" />
					</div>
				);
			},
			className: "hidden lg:w-[10%] lg:table-cell dark:bg-gray-800/50 backdrop-blur-sm"
		},
		{
			title: "Tên Phim",
			...getColumnSearchProps("tenPhim"),
			render: (record) => {
				return <p className="text-xs sm:text-lg font-bold">{record.tenPhim}</p>;
			},
			className: "w-[35%] lg:w-[20%] dark:bg-gray-800/50 backdrop-blur-sm"
		},
		{
			title: "Ngày đặt",
			...getColumnSearchProps("ngayDat"),
			render: (record) => <span>{moment(record.ngayDat).format("DD/MM/YYYY")}</span>,
			className: "w-[35%] lg:w-[10%] dark:bg-gray-800/50 backdrop-blur-sm"
		},
		{
			title: <span className="overflow-hidden truncate">Ghế đã đặt</span>,
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
			className: "w-[30%] lg:w-[30%] dark:bg-gray-800/50 backdrop-blur-sm"
		},
		
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
				<h1 className="text-center lg:text-start heading-1 mb-14">Thông tin đặt vé</h1>
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
