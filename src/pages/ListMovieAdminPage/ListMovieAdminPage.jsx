import { EditOutlined, DeleteOutlined, SearchOutlined, CalendarOutlined } from "@ant-design/icons";
import { Button, Input, Popconfirm, Space, Table, Tooltip, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovieMID, getListMovieMID } from "../../redux/slices/movieSlice";
import { navigate } from "../../App";
import { lcStorage } from "../../helpers/localStorage";
import { MOVIE_PARAM } from "./../../contants/movieContant";
const { Paragraph } = Typography;

function ListMovieAdminPage() {
	const { userLogin } = useSelector((state) => state.userSlices);
	useEffect(() => {
		if (userLogin === null) navigate("/");
	}, []);

	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");

	const searchInput = useRef(null);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getListMovieMID());
	}, []);
	const { listMovie } = useSelector((state) => state.movieSlice);
	const changeObj = (item) => {
		return JSON.parse(JSON.stringify(item));
	};
	const listMovieNew = changeObj(listMovie).map((item, i) => {
		item.maPhim = i;
		return item;
	});

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => {
			const renderTitle = () => {
				if (dataIndex === "maPhim") return "ID";
				if (dataIndex === "tenPhim") return "Tên phim";
			};
			return (
				<div
					style={{
						padding: 8,
					}}
					onKeyDown={(e) => e.stopPropagation()}
				>
					<Input
						ref={searchInput}
						placeholder={`Tìm kiếm ${renderTitle()}`}
						value={selectedKeys[0]}
						onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
						onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
						style={{
							marginBottom: 8,
							display: "block",
						}}
					/>
					<div className="flex gap-1">
						<Button type="primary" onClick={() => handleSearch(selectedKeys, confirm, dataIndex)} icon={<SearchOutlined />} size="small">
							Tìm kiếm
						</Button>
						<Button
							className="w-full"
							type="link"
							size="small"
							onClick={() => {
								close();
							}}
						>
							Đóng
						</Button>
					</div>
				</div>
			);
		},
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
	const handleDelete = (maPhim) => {
		dispatch(deleteMovieMID(maPhim)).then((result) => {
			if (result?.mes) result?.type(result?.mes);
		});
	};
	const columns = [
		{
			title: "ID",
			dataIndex: "_id",
			...getColumnSearchProps("_id"),
			sorter: (item2, item1) => item2.maPhim - item1.maPhim,
			sortDirections: ["descend", "ascend"],
			editable: true,
			className: "hidden sm:table-cell w-[30%] sm:w-[20%] md:w-[18%] lg:w-[15%] dark:bg-gray-800/50 backdrop-blur-sm",
		},
		{
			title: "Hình ảnh",
			render: (movie) => {
				return (
					<div className="w-20">
						<img className="w-full h-full object-contain rounded-md" src={movie.hinhAnh} alt="" />
					</div>
				);
			},
			editable: true,
			className: "hidden lg:table-cell dark:bg-gray-800/50 backdrop-blur-sm",
		},
		{
			title: "Tên phim",
			dataIndex: "tenPhim",
			...getColumnSearchProps("tenPhim"),
			editable: true,
			className: "sm:w-[20%] lg:w-[20%] dark:bg-gray-800/50 backdrop-blur-sm",
		},
		{
			title: "Mô tả",
			render: (movie) => {
				return (
					<Paragraph
						ellipsis={{
							rows: 2,
							expandable: true,
							symbol: "xem thêm",
						}}
					>
						{movie.moTa}
					</Paragraph>
				);
			},
			editable: true,
			className: "hidden sm:table-cell dark:bg-gray-800/50 backdrop-blur-sm",
		},
		{
			title: "Action",
			render: (_, record) => {
				return (
					<div className="flex gap-2">
						<Tooltip placement="top" title="Chỉnh sửa">
							<Button
								type="primary"
								icon={<EditOutlined />}
								onClick={() => {
									navigate(`/edit-movie/${record._id}`);
								}}
							/>
						</Tooltip>

						<Tooltip placement="top" title="Lịch chiếu">
							<Button
								type="primary"
								icon={<CalendarOutlined />}
								onClick={() => {
									lcStorage.set(MOVIE_PARAM, record);
									navigate(`/show-time/${record._id}`);
								}}
							/>
						</Tooltip>
						<Popconfirm okText="Có" cancelText="Không" title="Bạn có chắc muốn xoá phim này?" onConfirm={() => handleDelete(record._id)}>
							<Button
								danger
								icon={<DeleteOutlined />}
								onClick={() => {
									console.log(record._id);
								}}
							/>
						</Popconfirm>
					</div>
				);
			},
			className: " lg:w-[10%] dark:bg-gray-800/50 backdrop-blur-sm",
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
			<div className="container py-24">
				<h1 className="text-center lg:text-start heading-1 mb-14">Danh sách phim</h1>
				<Table rowKey={"maPhim"} theme={"dark"} columns={columns} dataSource={listMovieNew} />
			</div>
		</section>
	);
}

export default ListMovieAdminPage;
