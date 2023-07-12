import imgDevice from "../../../assets/landingPage/everyWhere/device-pile-vn.png";
import videoDevice from "../../../assets/landingPage/everyWhere/video-devices-vn.mp4";

function EveryWhere() {
	return (
		<section className="py-16">
			<div className="container">
				<div className="grid grid-cols-2">
					<div className="justify-self-end self-center">
						<h2 className="heading-1">Xem ở mọi nơi</h2>
						<p className="para-1 mt-4">Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.</p>
					</div>
					<div className="relative">
						<img src={imgDevice} alt="" />
						<div
							className="w-full h-ful absolute overflow-hidden 
                            max-w-[64%] max-h-[37%] top-[7%] left-[18%] -z-[1]
                            md:max-h-[48%] md:top-[10%]  
                            2xl:max-w-[53%] 2xl:max-h-[50%] 2xl:top-[10%] 2xl:left-[15%]
                        "
						>
							<video autoPlay playsInline muted loop>
								<source src={videoDevice} type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default EveryWhere;
