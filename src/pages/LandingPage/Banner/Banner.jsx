import backgroundBanner from "../../../assets/landingPage/banner/banner.jpg";
import StartWithMail from "../../../components/StartWithMail/StartWithMail";


function Banner() {
	return (
		<section className="banner">
			<div className="relative overflow-hidden" style={{ height: "700px" }}>
				<div className="absolute -z-10 h-full w-full">
					<img className="object-cover w-full h-full " src={backgroundBanner} alt="" />
					<div
						className="absolute bg-black/40 top-0 left-0 bottom-0 right-0 "
						style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)" }}
					></div>
				</div>
				<div className="container h-full 
					pt-header
					sm:pt-header_sm
					md:pt-header_md
					lg:pt-header_lg
					xl:pt-header_xl
					2xl:pt-header_2xl
					">
					<div className="flex flex-col justify-center h-full ">
						<h1 className="heading-1 text-center ">Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác</h1>
						<p className="para-1 text-center my-4">Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
						<StartWithMail />
					</div>
				</div>
			</div>
		</section>
	);
}
export default Banner;
