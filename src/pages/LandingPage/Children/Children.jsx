import imgChild from "../../../assets/landingPage/child/child.png";

function Children() {
	return (
		<section className="py-16">
			<div className="container">
				<div className="grid grid-cols-2">
					<div className="relative">
						<img className="w-full" src={imgChild} alt="" />
					</div>
					<div className="justify-self-end self-center">
						<h2 className="heading-1">Tạo hồ sơ cho trẻ em</h2>
						<p className="para-1 mt-4">
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
