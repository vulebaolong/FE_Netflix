import { FaFacebookF, FaGithub, FaInstagram, FaGoogle } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import style from "./Footer.module.css";

function Footer() {
	return (
		<footer className={`${style.content_footer} pt-28`}>
			<div className="container">
				<div className="md:flex md:justify-between">
					<Logo />
					<div className={` grid grid-cols-2 gap-20 sm:grid-cols-3`}>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Trợ giúp</h2>
							<ul className="text-gray-500 dark:text-gray-500 font-medium space-y-2">
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/vi/node/412" className="dark:hover:text-gray-200 ">
										Các câu hỏi thường gặp
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://media.netflix.com/en/" className="dark:hover:text-gray-200">
										Trung tâm đa phương tiện
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://devices.netflix.com/en/" className=" dark:hover:text-gray-200">
										Các cách xem
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="/" className="dark:hover:text-gray-200">
										Tuỳ chọn cookie
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://fast.com/" className="dark:hover:text-gray-200">
										Kiểm tra tốc độ
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Thông tin</h2>
							<ul className="text-gray-500 dark:text-gray-500 font-medium space-y-2">
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/vi/" className="dark:hover:text-gray-200">
										Trung tâm trợ giúp
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://ir.netflix.net/ir-overview/profile/default.aspx" className="dark:hover:text-gray-200">
										Quan hệ với nhà đầu tư
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/legal/termsofuse" className="dark:hover:text-gray-200 ">
										Điều khoản sử dụng
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/legal/corpinfo" className=" dark:hover:text-gray-200">
										Thông tin doanh nghiệp
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/legal/notices" className="dark:hover:text-gray-200 ">
										Thông báo pháp lý
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Kết nối</h2>
							<ul className="text-gray-500 dark:text-gray-500 font-medium space-y-2">
								<li className="">
									<NavLink to="/login" className="dark:hover:text-gray-200">
										Tài khoản
									</NavLink>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://jobs.netflix.com/" className="dark:hover:text-gray-200">
										Việc làm
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/legal/privacy" className="dark:hover:text-gray-200">
										Quyền riêng tư
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/vi/contactus" className="dark:hover:text-gray-200">
										Liên hệ với chúng tôi
									</a>
								</li>
								<li className="">
									<NavLink to="/login" className="dark:hover:text-gray-200">
										Chỉ có trên Netflix
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<div className="container sm:flex sm:items-center sm:justify-between pb-6">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{" "}
					<a href="https://github.com/vulebaolong" className=" hover:text-gray-900 dark:hover:text-white transition">
						VuLeBaoLong/NguyenThiHuynhNhi™
					</a>
					. All Rights Reserved.
				</span>
				<div className="flex space-x-5 sm:justify-center sm:mt-0">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/profile.php?id=100073114167973"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
					>
						<FaFacebookF size={20} />
					</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/vulebaolong" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
						<FaGithub size={20} />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/vulebaolong/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
						<FaInstagram size={20} />
					</a>
					<a target="_blank" rel="noreferrer" href="mailto:vulebaolong@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
						<FaGoogle size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
