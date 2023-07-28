import { DatePicker, Form, Input, Modal, Rate, Switch, Upload } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { getOneMovieMID, updateMovieMID } from "../../redux/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import ButtonMe from "./../../components/Button/Button";
import style from "./EditMovieAdminPage.module.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { MANHOM } from "../../contants/apiContants";

const getBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});

function EditMovieAdminPage() {
	const [form] = Form.useForm();
	const { id } = useParams();
	const dispatch = useDispatch();
	const { editMovie } = useSelector((state) => state.movieSlice);

	useEffect(() => {
		if (id) dispatch(getOneMovieMID(id));
	}, [id, dispatch]);
	const initialValues = {
		...editMovie,
		ngayKhoiChieu: dayjs(moment(editMovie.ngayKhoiChieu).format("DD-MM-YYYY"), "DD-MM-YYYY"),
	};
	useEffect(() => form.resetFields(), [editMovie, form]);

	const onFinish = (values) => {
		values.ngayKhoiChieu = moment(values.ngayKhoiChieu.$d).format("DD/MM/YYYY");
		values.maPhim = editMovie.maPhim;
		values.maNhom = MANHOM;
		if (typeof values.hinhAnh === "object") {
			values.hinhAnh = values.hinhAnh.file.originFileObj;
		}

		// console.log("values", values);
		const formData = new FormData();
		formData.append("tenPhim", values.tenPhim);
		formData.append("trailer", values.trailer);
		formData.append("moTa", values.moTa);
		formData.append("ngayKhoiChieu", values.ngayKhoiChieu);
		formData.append("dangChieu", values.dangChieu);
		formData.append("sapChieu", values.sapChieu);
		formData.append("hot", values.hot);
		formData.append("danhGia", values.danhGia);
		formData.append("maPhim", values.maPhim);
		formData.append("maNhom", values.maNhom);
		if (typeof values.hinhAnh === "string") {
			formData.append("hinhAnh", null);
		}
		if (typeof values.hinhAnh === "object") {
			formData.append("File", values.hinhAnh, values.hinhAnh.name);
		}

		// console.log(formData.get("File"));
		dispatch(updateMovieMID(formData)).then((result) => {
			if (result?.mes) result?.type(result?.mes);
		});
	};

	const [loading, setLoading] = useState(false);
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [previewTitle, setPreviewTitle] = useState("");
	const handleCancel = () => setPreviewOpen(false);
	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewImage(file.url || file.preview);
		setPreviewOpen(true);
		setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
	};
	const handleChange = async (info) => {
		if (info.file.status === "uploading") setLoading(true);

		if (info.file.status === "done") setLoading(false);

		if (info.file.status === "error") setLoading(false);
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
				<h2 className="heading-1 mb-5">Chỉnh sửa phim</h2>
				<div className={`${style.form} p-4 rounded-3xl border sm:p-6 xl:p-8 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700`}>
					<Form form={form} layout="vertical" onFinish={onFinish} initialValues={initialValues}>
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
						<Form.Item label={<span className="text-base font-bold">Ngày khởi chiếu</span>} name="ngayKhoiChieu">
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
						<Form.Item label={<span className="text-base font-bold">Đánh giá</span>} name="danhGia">
							<Rate allowHalf size="large" className={`${style.input} `} />
						</Form.Item>

						{/* HÌNH ẢNH */}
						<Form.Item label={<span className="text-base font-bold">Hình ảnh</span>} name="hinhAnh" valuePropName="file">
							<Upload
								listType="picture-card"
								accept="image/png, image/jpeg"
								maxCount={1}
								customRequest={({ file, onSuccess }) => {
									setTimeout(() => {
										onSuccess("ok");
									}, 0);
								}}
								onPreview={handlePreview}
								onChange={handleChange}
								defaultFileList={editMovie.hinhAnh ? [{ url: editMovie.hinhAnh, uid: "1" }] : []}
							>
								<div>
									{loading ? <LoadingOutlined /> : <PlusOutlined />}
									<div style={{ marginTop: 8 }}>Upload</div>
								</div>
							</Upload>
						</Form.Item>
						<Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
							<img
								alt="example"
								style={{
									width: "100%",
								}}
								src={previewImage}
							/>
						</Modal>

						{/* BUTTON */}
						<Form.Item>
							<ButtonMe type="primary" size="big">
								<span className="text-base font-medium">Cập nhật phim</span>
							</ButtonMe>
						</Form.Item>
					</Form>
				</div>
			</div>
		</section>
	);
}
export default EditMovieAdminPage;
