import imgMobile from "../../../assets/landingPage/download/mobile-0819.jpg";
import imgBoxshot from "../../../assets/landingPage/download/boxshot.png";
import imgDownloadIcon from "../../../assets/landingPage/download/download-icon.gif";

function Download() {
	return (
		<section className="py-16">
			<div className="container">
				<div className="grid grid-cols-2">
					<div className="relative">
						<img className="w-full" src={imgMobile} alt="" />
						<div className="absolute w-1/2 px-3 py-4 flex bg-black justify-between gap-5 overflow-hidden left-1/2 bottom-[8%] -translate-x-1/2 rounded-xl border-2 border-solid border-[#808080b3] ">
							<div className="flex items-center  h-20">
								<img className="h-full" src={imgBoxshot} alt="" />
							</div>
							<div className="flex flex-col justify-center flex-1">
								<p className="text-base font-semibold">Cậu bé mất tích</p>
								<p className="text-sm font-normal text-[#0071eb]">Đang tải xuống...</p>
							</div>
							<div className="flex items-center">
								<img className="h-12 w-12" src={imgDownloadIcon} alt="" />
							</div>
						</div>
					</div>
					<div className="justify-self-end self-center">
						<h2 className="heading-1">Tải xuống nội dung để xem ngoại tuyến</h2>
						<p className="para-1 mt-4">Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Download;
