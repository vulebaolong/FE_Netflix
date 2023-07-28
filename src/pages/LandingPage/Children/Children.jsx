import imgChild from "../../../assets/landingPage/child/child.png";

function Children() {
	return (
		<section className="py-16 bg-black">
			<div className="container">
				<div
					className="grid 
					grid-cols-1 
					xl:grid-cols-2
					"
				>
					<div data-aos-delay="500" data-aos="fade-right" data-aos-duration="1000" className="relative">
						<img className="w-full" src={imgChild} alt="" />
					</div>

					<div data-aos-delay="1000" data-aos="fade-left" data-aos-duration="1000" className="justify-self-end self-center">
						<h2
							className="heading-1
							text-center
							xl:text-start
							"
						>
							Tạo hồ sơ cho trẻ em
						</h2>
						<p
							className="para-1 mt-4
							text-center
							xl:text-start
							"
						>
							Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của
							bạn.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Children;
