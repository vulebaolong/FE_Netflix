import { DatePicker, Form, Input, Rate, Switch, Upload } from "antd";
import _ from "lodash";
import moment from "moment";
import { useEffect } from "react";
import { getOneMovie } from "../../redux/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Button from "./../../components/Button/Button";
import style from "./EditMovieAdminPage.module.css";

function EditMovieAdminPage() {
	const [form] = Form.useForm();
	const { id } = useParams();
	const dispatch = useDispatch();
	const { editMovie } = useSelector((state) => state.movieSlice);
	useEffect(() => {
		if (id) dispatch(getOneMovie(id));
	}, [id, dispatch]);
	useEffect(() => form.resetFields(), [editMovie, form]);

	const onFinish = (values) => {
		console.log(values);
		// values.ngayKhoiChieu = moment(values.ngayKhoiChieu.$d).format("DD/MM/YYYY");
		// values.maPhim = infoFilm.maPhim;
		// values.maNhom = GROUP_ID;

		// console.log("values", values);
		// const formData = new FormData();
		// _.forEach(values, (value, key) => {
		//     // console.log(`${key}: ${value}`);
		//     // formData.append(key, value);
		//     if (key !== "hinhAnh") {
		//         formData.append(key, value);
		//     }
		//     if (key === "hinhAnh" && values.hinhAnh !== null) {
		//         formData.append("File", values.hinhAnh, values.name);
		//     }
		// });
		// dispatch(editFilmMID(formData));
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
				<h2 className="heading-1">edit movie</h2>
				<div className={`${style.form} p-4 rounded-3xl border sm:p-6 xl:p-8 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700`}>
					<Form form={form} layout="vertical" onFinish={onFinish} initialValues={editMovie}>
						{/* TÊN PHIM */}
						<Form.Item label={<span className="text-base font-bold">Tên phim</span>} name="tenPhim">
							<Input size="large" className={`${style.input} bg-gray-700/60`} placeholder="Tên phim" autoComplete="off" />
						</Form.Item>

						{/* TRAILER */}
						<Form.Item label={<span className="text-base font-bold">Trailer</span>} name="trailer">
							<Input size="large" className={`${style.input} bg-gray-700/60`} placeholder="Trailer" autoComplete="off" />
						</Form.Item>

						{/* MÔ TẢ */}
						<Form.Item label={<span className="text-base font-bold">Mô tả</span>} name="moTa">
							<TextArea rows={4} size="large" className={`${style.input} bg-gray-700/60`} placeholder="Mô tả" autoComplete="off" />
						</Form.Item>

						{/* NGÀY KHỞI CHIẾU */}
						<Form.Item label={<span className="text-base font-bold">Ngày khởi chiếu</span>}>
							<DatePicker format={"DD/MM/YYYY"} size="large" className={`${style.input} bg-gray-700/60`} />
						</Form.Item>

						{/* ĐANG CHIẾU */}
						<Form.Item label={<span className="text-base font-bold">Đang chiếu</span>} name="dangChieu" valuePropName="checked">
							<Switch size="large" className={`${style.input} bg-gray-700/60`} />
						</Form.Item>

						{/* SẮP CHIẾU */}
						<Form.Item label={<span className="text-base font-bold">Sắp Chiếu</span>} name="sapChieu" valuePropName="checked">
							<Switch size="large" className={`${style.input} bg-gray-700/60`} />
						</Form.Item>

						{/* HOT */}
						<Form.Item label={<span className="text-base font-bold">Hot</span>} name="hot" valuePropName="checked">
							<Switch size="large" className={`${style.input} bg-gray-700/60`} />
						</Form.Item>

						{/* ĐÁNH GIÁ */}
						<Form.Item label={<span className="text-base font-bold">Đánh giá</span>}name="danhGia">
							<Rate allowHalf size="large" className={`${style.input} `}/>
						</Form.Item>

						{/* BUTTON */}
						<Form.Item>
							<Button type="primary" size="big">
								<span className="text-base font-medium">Cập nhật phim</span>
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</section>
	);
}
export default EditMovieAdminPage;
