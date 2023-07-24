import backgroundBanner from "../../assets/landingPage/banner/banner.jpg";

function BackgroundImg() {
	return (
		<div className="absolute h-full w-full top-0 left-0">
			<img className="object-cover w-full h-full " src={backgroundBanner} alt="" />
			<div
				className="absolute bg-black/40 top-0 left-0 bottom-0 right-0 "
				style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)" }}
			></div>
		</div>
	);
}
export default BackgroundImg;
