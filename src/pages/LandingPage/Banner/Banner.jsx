import BackgroundImg from "../../../components/BackgroundImg/BackgroundImg";
import StartWithMail from "../../../components/StartWithMail/StartWithMail";
import imgBackground from "../../../assets/imgBackground/VN_vi_website_large.jpg";

function Banner() {
	return (
		<section className="banner">
			<div className="relative overflow-hidden" style={{ height: "700px" }}>
				{/* BACKGROUND IMG */}
				<BackgroundImg img={imgBackground} filter />
				<div
					className="container relative h-full 
					pt-header
					sm:pt-header_sm
					md:pt-header_md
					lg:pt-header_lg
					xl:pt-header_xl
					2xl:pt-header_2xl
					"
				>
					<div className="flex flex-col justify-center h-full ">
						<div data-aos-delay="500" data-aos="fade-right" data-aos-duration="1000">
							<h1 className="heading-1 text-center">Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác</h1>
							<p className="para-1 text-center my-4">Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
						</div>
						<StartWithMail />
					</div>
				</div>
			</div>
		</section>
	);
}
export default Banner;
