import { ContactsOutlined, KeyOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, message } from "antd";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoAccountMID, updateAccountMID } from "../../redux/slices/userSlices";
import style from "./AccountSettingsPage.module.css";
import Button from "../../components/Button/Button";

function AccountSettingsPage() {
	const [formInfo] = Form.useForm();
	const [formPassword] = Form.useForm();
	const dispatch = useDispatch();
	let { infoAccount } = useSelector((state) => state.userSlices);
	// Sao chép đối tượng infoAccount
	const updatedInfoAccount = useMemo(() => ({ ...infoAccount }), [infoAccount]);

	useEffect(() => {
		dispatch(getInfoAccountMID());
	}, []);

	useEffect(() => {
		// Thêm thuộc tính mới "soDT"
		updatedInfoAccount.matKhau = "";
		// console.log(updatedInfoAccount);
		formInfo.resetFields();
	}, [updatedInfoAccount, formInfo]);

	const passwordValidator = (_, value) => {
		if (!value) {
			// Nếu trường rỗng, trả về thông báo lỗi "Vui lòng nhập mật khẩu!"
			return Promise.reject("Vui lòng nhập mật khẩu!");
		}
		if (value !== infoAccount.matKhau) {
			return Promise.reject("Mật khẩu không chính xác");
		}
		return Promise.resolve();
	};

	const onFinishInfo = (values) => {
		values.matKhau = infoAccount.matKhau;
		values.maNhom = infoAccount.maNhom;
		values.maLoaiNguoiDung = infoAccount.maLoaiNguoiDung;
		console.log("valuesInfo", values);
		dispatch(updateAccountMID({ ...values })).then((result) => {
			if (result?.mes) result?.type(result?.mes);
		});
	};

	const onFinishPassword = async (values) => {
		// if (values.matKhauCurrent !== infoAccount.matKhau) return error("Mật khẩu hiện tại không chính xác");
		values.taiKhoan = infoAccount.taiKhoan;
		values.email = infoAccount.email;
		values.soDT = infoAccount.soDT;
		values.hoTen = infoAccount.hoTen;
		values.maNhom = infoAccount.maNhom;
		values.maLoaiNguoiDung = infoAccount.maLoaiNguoiDung;
		console.log("valuesPassword", values);
		formPassword.resetFields();
		dispatch(updateAccountMID({ ...values }));
	};

	// {
	//     "taiKhoan": "nhi1",
	//     "matKhau": "123456",
	//     "email": "fawelulise@mailinator.com",
	//     "soDT": "0836789578",
	//     "hoTen": "nhi nhi",
	//     "maNhom": "GP00",
	//     "maLoaiNguoiDung": "KhachHang"
	// }
	return (
		<>
			<section
				className=" pt-header relative
            sm:pt-header_sm
            md:pt-header_md
            lg:pt-header_lg
            xl:pt-header_xl
            2xl:pt-header_2xl"
			>
				<div className="container py-24 relative">
					<h1 className="text-center lg:text-start heading-1 mb-2">Cài đặt tài khoản</h1>
					<p className="text-center lg:text-start mb-10 text-lg text-gray-300">Xem và cập nhật chi tiết cho tài khoản của bạn.</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
						<div className={`${style.form} p-4 rounded-3xl border sm:p-6 xl:p-8 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700`}>
							<Form form={formInfo} layout="vertical" initialValues={updatedInfoAccount} onFinish={onFinishInfo} autoComplete="off">
								<h2 className="mb-4 text-xl font-bold dark:text-white">Thông tin chung</h2>
								<div className="grid grid-cols-2 gap-3">
									<div className="">
										{/* HỌ TÊN */}
										<Form.Item
											name="hoTen"
											label={<span className="text-sm font-medium">Họ và tên</span>}
											rules={[
												{
													required: true,
													message: "Vui lòng nhập họ và tên",
												},
												{
													pattern: /^[\p{L}\s]+$/u,
													message: "Họ và tên chỉ bao gồm chữ, khoảng trắng",
												},
											]}
											hasFeedback
										>
											<Input
												className={`${style.input} bg-gray-700/60`}
												size="large"
												prefix={<ContactsOutlined />}
												placeholder="Họ và tên"
												autoComplete="off"
											/>
										</Form.Item>

										{/* EMAIL */}
										<Form.Item
											name="email"
											label={<span className="text-sm font-medium">Email</span>}
											rules={[
												{
													required: true,
													message: "Vui lòng nhập email",
												},
												{
													pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
													message: "Email phải đúng định dạng",
												},
											]}
											hasFeedback
										>
											<Input className={`${style.input} bg-gray-700/60`} prefix={<MailOutlined />} size="large" placeholder="Email" autoComplete="off" />
										</Form.Item>
									</div>
									<div className="">
										{/* TÀI KHOẢN */}
										<Form.Item
											name="taiKhoan"
											label={<span className="text-sm font-medium">Tài khoản</span>}
											rules={[
												{
													required: true,
													message: "Vui lòng nhập tài khoản",
												},
												{
													pattern: /^\S+$/,
													message: "Không chứa khoảng trắng",
												},
												{
													pattern: /^[a-zA-Z0-9\s]+$/,
													message: "Chỉ gồm chữ hoặc số",
												},
											]}
											hasFeedback
										>
											<Input className={`${style.input} bg-gray-700/60`} size="large" prefix={<UserOutlined />} placeholder="Tài khoản" autoComplete="off" />
										</Form.Item>

										{/* SỐ ĐIỆN THOẠI */}
										<Form.Item
											name="soDT"
											label={<span className="text-sm font-medium">Số điện thoại</span>}
											rules={[
												{
													required: true,
													message: "Vui lòng nhập số điện thoại",
												},
												{
													pattern: /^\d{10}$/,
													message: "Số điện thoại phải là 10 chữ số",
												},
											]}
											hasFeedback
										>
											<Input
												className={`${style.input} bg-gray-700/60`}
												prefix={<PhoneOutlined />}
												size="large"
												placeholder="Số điện thoại"
												autoComplete="off"
											/>
										</Form.Item>
									</div>
								</div>
								<Button type="primary" size="big">
									<span className="text-base font-medium">Cập nhật tài khoản</span>
								</Button>
							</Form>
						</div>
						<div className={`${style.form} p-4 rounded-3xl border sm:p-6 xl:p-8 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700`}>
							<Form form={formPassword} layout="vertical" onFinish={onFinishPassword} autoComplete="off">
								<h2 className="mb-4 text-xl font-bold dark:text-white">Cập nhật mật khẩu</h2>
								<Form.Item
									name="matKhauCurrent"
									label={<span className="text-sm font-medium">Mật khẩu hiện tại</span>}
									rules={[{ validator: passwordValidator }]}
									hasFeedback
								>
									<Input.Password
										className={`${style.input} bg-gray-700/60`}
										prefix={<KeyOutlined />}
										id="warning"
										size="large"
										placeholder="Mật khẩu hiện tại"
										autoComplete="current-password"
									/>
								</Form.Item>
								<Form.Item
									name="matKhau"
									label={<span className="text-sm font-medium">Mật khẩu mới</span>}
									rules={[
										{
											required: true,
											message: "Vui lòng nhập mật khẩu",
										},
									]}
									hasFeedback
								>
									<Input.Password
										className={`${style.input} bg-gray-700/60`}
										prefix={<KeyOutlined />}
										id="warning"
										size="large"
										placeholder="Mật khẩu mới"
										autoComplete="current-password"
									/>
								</Form.Item>
								<Button type="primary" size="big">
									<span className="text-base font-medium">Cập nhật mật khẩu</span>
								</Button>
							</Form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default AccountSettingsPage;
