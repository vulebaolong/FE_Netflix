import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovieMID, getListMovieMID } from "../../redux/slices/movieSlice";
import { navigate } from "../../App";

function ListMovieAdminPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getListMovieMID());
	}, []);
	const { listMovie } = useSelector((state) => state.movieSlice);

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
			title: "Mã phim",
			dataIndex: "maPhim",
			width: 125,
			...getColumnSearchProps("maPhim"),
			sorter: (item2, item1) => item2.maPhim - item1.maPhim,
			sortDirections: ["descend", "ascend"],
			editable: true,
		},
		{
			title: "Hình ảnh",
			render: (text) => {
				// console.log(text, record, index);
				return (
					<div className="w-20 h-20">
						<img className="w-full h-full object-contain" src={text.hinhAnh} alt="" />
					</div>
				);
			},
			editable: true,
		},
		{
			title: "Tên phim",
			dataIndex: "tenPhim",
			width: 125,
			...getColumnSearchProps("tenPhim"),
			editable: true,
		},
		{
			title: "Mô tả",
			dataIndex: "moTa",
			...getColumnSearchProps("moTa"),
			editable: true,
		},
		{
			title: "Action",
			width: 100,
			render: (_, record) => {
				return (
					<div className="flex gap-2">
						<Button
							type="primary"
							icon={<EditOutlined />}
							onClick={() => {
								navigate(`/edit-movie/${record.maPhim}`);
							}}
						/>
						<Button
							danger
							icon={<DeleteOutlined />}
							onClick={() => {
								console.log(record.maPhim);
								dispatch(deleteMovieMID(record.maPhim));
							}}
						/>
					</div>
				);
			},
		},
	];
	return (
		<section
			className="pt-header 
            sm:pt-header_sm
            md:pt-header_md
            lg:pt-header_lg
            xl:pt-header_xl
            2xl:pt-header_2xl"
		>
			<div className="container">
				<h1 className="heading-1  mb-2">List movie</h1>
				<Table rowKey={"maPhim"} theme={"dark"} columns={columns} dataSource={listMovie} />
			</div>
		</section>
	);
}
export default ListMovieAdminPage;
