import PropTypes from "prop-types";
function BackgroundImg({ img, filter }) {
	return (
		<div className="BACKGROUNDIMG absolute h-full w-full top-0 left-0">
			<div className="absolute h-full w-full top-0 left-0 bg-black"></div>
			<img className="relative object-cover w-full h-full " src={img} alt="" />
			{filter && (
				<div
					className="absolute bg-black/40 top-0 left-0 bottom-0 right-0 "
					style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.8) 100%)" }}
				></div>
			)}
		</div>
	);
}
BackgroundImg.propTypes = {
	// ⛔️ incorrect prop type
	img: PropTypes.any,
	filter: PropTypes.any,
};
export default BackgroundImg;
