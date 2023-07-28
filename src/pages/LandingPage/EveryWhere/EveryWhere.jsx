import imgDevice from "../../../assets/landingPage/everyWhere/device-pile-vn.png";
import videoDevice from "../../../assets/landingPage/everyWhere/video-devices-vn.mp4";

function EveryWhere() {
	return (
		<section className="py-16 bg-black">
			<div className="container">
				<div
					className="grid 
					grid-cols-1 
					xl:grid-cols-2
					"
				>
					<div data-aos-delay="500" data-aos="fade-right" data-aos-duration="1000" className="justify-self-end self-center">
						<h2
							className="heading-1
							text-center
							xl:text-start
						"
						>
							Xem ở mọi nơi
						</h2>
						<p
							className="para-1 mt-4
							text-center
							xl:text-start
							"
						>
							Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.
						</p>
					</div>

					<div data-aos-delay="1000" data-aos="fade-left" data-aos-duration="1000" className="relative">
						<img className="relative z-[1] mx-auto" src={imgDevice} alt="" />
						<div
							className="w-full h-ful absolute overflow-hidden z-0
                            max-w-[63%] max-h-[48%] top-[10%] left-[18%] 
                            md:max-w-[57%] md:max-h-[47%] md:left-[21%] 
                            lg:max-w-[45%] lg:left-[27%] 
                            xl:max-w-[63%] xl:max-h-[48%] xl:top-[10%] xl:left-[18%] 
                            
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
