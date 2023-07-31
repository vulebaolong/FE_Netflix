import { KeyOutlined, ContactsOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { registerMID } from "../../../redux/slices/userSlices";

function Register() {
	const dispatch = useDispatch();

	const { email } = useSelector((state) => state.startWithMailSlice);

	const onFinish = (values) => {
		dispatch(registerMID(values));
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<div
				className=" bg-black/70 max-w-md w-full rounded-2xl
					p-9
					sm:p-12
					lg:p-14
					2xl:p-16
					"
			>
				<h1 className="text-3xl font-medium mb-10">Đăng ký</h1>

				{/* Form */}
				<Form name="basic" layout={"vertical"} initialValues={{ email }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
					{/* HỌ TÊN */}
					<Form.Item
						name="hoTen"
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
						<Input size="large" prefix={<ContactsOutlined />} placeholder="Họ và tên" autoComplete="off" />
					</Form.Item>

					{/* TÀI KHOẢN */}
					<Form.Item
						name="taiKhoan"
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
						<Input size="large" prefix={<UserOutlined />} placeholder="Tài khoản" autoComplete="off" />
					</Form.Item>

					{/* MẬT KHẨU */}
					<Form.Item
						name="matKhau"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập mật khẩu",
							},
							{
								pattern: /^\S{6,}$/,
								message: "Mật khẩu tối thiểu 6 ký tự",
							},
						]}
						hasFeedback
					>
						<Input.Password prefix={<KeyOutlined />} size="large" placeholder="Mật khẩu" autoComplete="off" />
					</Form.Item>

					{/* EMAIL */}
					<Form.Item
						name="email"
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
						<Input prefix={<MailOutlined />} size="large" placeholder="Email" autoComplete="off" />
					</Form.Item>

					{/* SỐ ĐIỆN THOẠI */}
					<Form.Item
						name="soDt"
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
						<Input prefix={<PhoneOutlined />} size="large" placeholder="Số điện thoại" autoComplete="off" />
					</Form.Item>

					<Form.Item className="mt-5">
						<Button htmlFor={"submit"} type={"primary"} size={"big"} className="w-full mt-1">
							<span className="text-xl font-semibold text-white">Đăng ký</span>
						</Button>

						<p className="text-sm py-4 font-medium text-center sm:px-6 dark:text-gray-300">
							<span>Bạn đã có tài khoản Netflix? </span>
							<NavLink to={"/login"} className="underline dark:text-gray-100">
								Đăng nhập.
							</NavLink>
						</p>
					</Form.Item>
				</Form>
			</div>
		</>
	);
}
export default Register;
