import imgDevices from "../../../assets/homePage/Devices.jpg";

function Devices() {
	return (
		<section className="devices py-24 bg-backgroundHome">
			<div className="container">
				<div
					className="grid gap-5
					grid-cols-1 
					xl:grid-cols-2
					"
				>
					<div
						className="flex items-center
                        order-2
                        xl:order-1
                        
                        "
					>
						<img className="rounded-2xl" src={imgDevices} alt="" />
					</div>
					<div
						className="flex flex-col justify-center
                        order-1
                        xl:order-2
                        "
					>
						<h2
							className="font-black  leading-none
                            text-base text-center mb-2
                            sm:text-2xl 
                            md:text-3xl
                            lg:text-4xl
                            xl:text-start
                            "
						>
							Hỗ trợ sử dụng các ứng dụng và thiết bị của chúng tôi
						</h2>
						<p
							className=" text-center
                            text-xs
                            sm:text-sm
                            md:text-base
                            lg:text-lg
                            xl:text-xl xl:text-start
                            "
						>
							Tại Netflix, chúng tôi tin rằng tính hỗ trợ sử dụng cũng quan trọng như tính thẩm mỹ, tốc độ và độ ổn định. Đó là lý do chúng tôi cung cấp các tính năng
							như hệ thống âm thanh hỗ trợ, điều chỉnh độ sáng, các phím tắt, trình đọc màn hình và lệnh thoại.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Devices;
