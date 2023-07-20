import { FaFacebookF, FaGithub, FaInstagram, FaGoogle } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import style from "./Footer.module.css";

function Footer() {
	const { pathname } = useLocation();
	// 
	const backgroundColor = () => {
		let backgroundColor = "bg-black";

		if (pathname === "/login" || pathname === "/signup" || pathname === "/logout") {
			backgroundColor = "bg-black/50";
		}

		return backgroundColor;
	};

	const containerFooter = () => {
		let container = "container";

		// if (pathname === "/home") {
		// 	container = "px-[4%] 2xl:px-[60px]";
		// }

		return container;
	};

	return (
		<footer className={`${style.content_footer} ${backgroundColor()} pt-24 w-full`}>
			<div className={`${containerFooter()}`}>
				<div className="md:flex md:justify-between">
					<div className="">
						<Logo className="w-[9.25rem] h-[2.5rem]" />
					</div>
					<div
						className="grid 
						mt-16 gap-10 grid-cols-1 
						sm:mt-16 sm:gap-10 sm:grid-cols-2 
						md:mt-0
						lg:grid-cols-3
						xl:gap-20
						"
					>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Trợ giúp</h2>
							<ul className="text-gray-500 dark:text-gray-500 font-medium space-y-2">
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/vi/node/412" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Các câu hỏi thường gặp
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://media.netflix.com/en/" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Trung tâm đa phương tiện
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://devices.netflix.com/en/" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Các cách xem
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="/" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Tuỳ chọn cookie
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://fast.com/" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Kiểm tra tốc độ
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Thông tin</h2>
							<ul className="text-gray-500 dark:text-gray-500 font-medium space-y-2">
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/vi/" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Trung tâm trợ giúp
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://ir.netflix.net/ir-overview/profile/default.aspx"
										className={`dark:hover:text-gray-200 ${style.footer_item}`}
									>
										Quan hệ với nhà đầu tư
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://help.netflix.com/legal/termsofuse"
										className={`dark:hover:text-gray-200 ${style.footer_item}`}
									>
										Điều khoản sử dụng
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/legal/corpinfo" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Thông tin doanh nghiệp
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/legal/notices" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Thông báo pháp lý
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Kết nối</h2>
							<ul className="text-gray-500 dark:text-gray-500 font-medium space-y-2">
								<li className="">
									<NavLink to="/login" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Tài khoản
									</NavLink>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://jobs.netflix.com/" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Việc làm
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/legal/privacy" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Quyền riêng tư
									</a>
								</li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://help.netflix.com/vi/contactus" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Liên hệ với chúng tôi
									</a>
								</li>
								<li className="">
									<NavLink to="/login" className={`dark:hover:text-gray-200 ${style.footer_item}`}>
										Chỉ có trên Netflix
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<div className={`${containerFooter()} sm:flex sm:items-center sm:justify-between pb-6`}>
				<p
					className="text-sm text-gray-500 sm:text-center dark:text-gray-400
					text-center
					"
				>
					<span>© 2023 </span>
					<a href="https://github.com/vulebaolong" className={`hover:text-gray-900 dark:hover:text-white transition ${style.footer_item}`}>
						VuLeBaoLong/NguyenThiHuynhNhi™
					</a>
					<span>. All Rights Reserved.</span>
				</p>
				<div
					className="flex space-x-5 
					justify-center mt-3
					sm:mt-0 sm:justify-center 
					"
				>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/profile.php?id=100073114167973"
						className={`text-gray-500 hover:text-gray-900 dark:hover:text-white transition ${style.footer_item}`}
					>
						<FaFacebookF size={20} />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/vulebaolong"
						className={`text-gray-500 hover:text-gray-900 dark:hover:text-white transition ${style.footer_item}`}
					>
						<FaGithub size={20} />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.instagram.com/vulebaolong/"
						className={`text-gray-500 hover:text-gray-900 dark:hover:text-white transition ${style.footer_item}`}
					>
						<FaInstagram size={20} />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="mailto:vulebaolong@gmail.com"
						className={`text-gray-500 hover:text-gray-900 dark:hover:text-white transition ${style.footer_item}`}
					>
						<FaGoogle size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
