import VN_vi_website_small from "../../../assets/imgBackground/VN_vi_website_small.jpg";
import VN_vi_website_medium from "../../../assets/imgBackground/VN_vi_website_medium.jpg";
import VN_vi_website_large from "../../../assets/imgBackground/VN_vi_website_large.jpg";

function BackgroundAuth() {
	return (
		<div className="absolute -z-10 h-full w-full">
			<img
				className="object-cover w-full h-full"
				src={VN_vi_website_small}
				srcSet={`${VN_vi_website_small} 1000w, 
                        ${VN_vi_website_medium} 1500w, 
                        ${VN_vi_website_large} 1800w`}
			/>

			<div
				className="absolute bg-black/40 top-0 left-0 bottom-0 right-0 "
				style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 100%)" }}
			></div>
		</div>
	);
}
export default BackgroundAuth;
