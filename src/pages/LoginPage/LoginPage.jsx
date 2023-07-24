import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import Button from "../../components/Button/Button";

function LoginPage() {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	return (
		<div className="">
			<div className="container pt-header">
				<div className=" mx-auto h-[500px] max-w-md w-full">
					<div className="p-16 bg-black/75 rounded-2xl">
						<h2 className="text-white text-[32px] font-bold mb-7">Đăng nhập</h2>
						<Form
							name="normal_login"
							className="login-form"
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
						>
							<Form.Item
								name="username"
								rules={[
									{
										required: true,
										message: "Xin vui lòng nhập tên của bạn!",
									},
								]}
							>
								<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
							</Form.Item>
							<Form.Item
								name="password"
								rules={[
									{
										required: true,
										message: "Please input your Password!",
									},
								]}
							>
								<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
							</Form.Item>

							<Form.Item>
								<Button type="primary" size="big" htmlType="submit" className="login-form-button">
									Log in 
								</Button>
								Or <a href="">register now!</a>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
