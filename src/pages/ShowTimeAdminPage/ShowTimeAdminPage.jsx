import { Cascader, DatePicker, Form, InputNumber } from "antd";
import ButtonMe from "./../../components/Button/Button";
import style from "./ShowTimeAdminPage.module.css";
import { useEffect, useState } from "react";
import { cinemaApi } from "../../api/cinemaApi";
import moment from "moment";
import { useParams } from "react-router-dom";
import { ticketApi } from "../../api/ticketApi";
import { lcStorage } from "../../helpers/localStorage";
import { MOVIE_PARAM } from "../../contants/movieContant";
import { navigate, success } from "../../App";
import { error } from "./../../App";
import { useSelector } from "react-redux";

function ShowTimeAdminPage() {
	const { userLogin } = useSelector((state) => state.userSlices);

	useEffect(() => {
		if (userLogin === null) navigate("/");
	}, []);
	const { id } = useParams();
	const [options, setOptions] = useState([]);
	const [movieParam, setMovieParam] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const { data } = await cinemaApi.getInfoCinemaSystem();
			setOptions(
				data.result.data.map((htr, index) => {
					return {
						label: htr.tenHeThongRap,
						value: htr.maHeThongRap,
						isLeaf: false,
					};
				}),
			);
		}
		fetchData();
		setMovieParam(lcStorage.get(MOVIE_PARAM));
	}, []);

	const [form] = Form.useForm();
	const onFinish = async (values) => {
		values.maPhim = id;
		values.maRap = values.maRap[1];
		values.ngayChieuGioChieu = moment(values.ngayChieuGioChieu.$d).format("DD/MM/YYYY HH:mm:ss");
		console.log("values", values);
		try {
			await ticketApi.taoLichChieu(values);
			success("Thêm lịch chiếu thành công");
			navigate(`/detail/${id}#detailTab`);
		} catch (err) {
			error("Thêm lịch chiếu thất bại");
		}
	};
	const loadData = async (selectedOptions) => {
		const { value } = selectedOptions[0];
		const targetOption = selectedOptions[selectedOptions.length - 1];
		const { data } = await cinemaApi.getInfoCinemaToSystem(value);
		(targetOption.children = data.result.data.map((cumRap, index) => {
			return {
				label: cumRap.tenCumRap.trim(),
				value: cumRap.maCumRap.trim(),
			};
		})),
			setOptions([...options]);
	};

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
				<h2 className="heading-1 mb-5 text-center">Thêm lịch chiếu</h2>

				<div
					className={`${style.form} w-full sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[525px] 2xl:w-[550px] mx-auto p-4 rounded-3xl border sm:p-6 xl:p-8 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700`}
				>
					{movieParam && (
						<div className="mb-3">
							<h2 className="text-lg font-bold text-center mb-3">{movieParam.tenPhim}</h2>
							<img className="rounded-lg" src={movieParam.hinhAnh} alt="movieParam" />
						</div>
					)}
					<Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ giaVe: 75000 }}>
						{/* HỆ THỐNG RẠP */}
						<Form.Item
							label={<span className="text-base font-bold">Hệ thống rạp</span>}
							name="maRap"
							rules={[
								{
									required: true,
									message: "Vui lòng chọn hệ thống rạp",
								},
							]}
							hasFeedback
						>
							<Cascader
								placeholder="Xin vui lòng chọn hệ thống rạp"
								size="large"
								className={`${style.cascader}`}
								options={options}
								loadData={loadData}
								changeOnSelect
							/>
						</Form.Item>

						{/* NGÀY CHIẾU GIỜ CHIẾU*/}
						<Form.Item
							label={<span className="text-base font-bold">Ngày chiếu giờ chiếu</span>}
							name="ngayChieuGioChieu"
							rules={[
								{
									required: true,
									message: "Vui lòng chọn ngày chiếu giờ chiếu",
								},
							]}
							hasFeedback
						>
							<DatePicker showTime format={"DD/MM/YYYY HH:mm:ss"} size="large" className={`${style.input} !bg-gray-700/60 w-full`} />
						</Form.Item>

						{/* GIÁ VÉ*/}
						<Form.Item
							label={<span className="text-base font-bold">Giá vé</span>}
							name="giaVe"
							rules={[
								{
									required: true,
									message: "Vui lòng nhập giá vé",
								},
							]}
							hasFeedback
						>
							<InputNumber size="large" className={`INPUTNUMBER  `} min={75000} max={150000} autoComplete="off" />
						</Form.Item>

						{/* BUTTON */}
						<Form.Item>
							<ButtonMe type="primary" size="big">
								<span className="text-base font-medium">Tạo lịch chiếu</span>
							</ButtonMe>
						</Form.Item>
					</Form>
				</div>
			</div>
		</section>
	);
}
export default ShowTimeAdminPage;
