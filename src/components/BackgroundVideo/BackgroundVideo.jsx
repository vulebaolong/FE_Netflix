import PropTypes from "prop-types";
function BackgroundVideo({ src, filter, type }) {
	let jsx = <></>;
	switch (type) {
		case "video":
			jsx = (
				<video
					autoPlay
					muted
					loop
					playsInline
					// poster="//images.ctfassets.net/4cd45et68cgf/7vHGD7Uco3vCrkcODgl93A/6d8c350a705f7b072d9060c16bd19240/netflix-home_hero-optimized-1200.png"
					className="w-full h-full"
				>
					<source src={src} type="video/mp4" />
				</video>
			);
			break;
		case "iframe":
			jsx = (
				<iframe
					src={src}
					allow="autoplay; fullscreen; picture-in-picture"
					allowFullScreen
					style={{ width: "100%", height: "100%" }}
				/>
			);
			break;

		default:
			break;
	}

	return (
		<div className="absolute h-full w-full top-0 left-0">
			{jsx}
			{filter && (
				<div
					className="absolute bg-black/40 top-0 left-0 bottom-0 right-0 "
					style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.8) 100%)" }}
				></div>
			)}
		</div>
	);
}
BackgroundVideo.propTypes = {
	// ⛔️ incorrect prop type
	src: PropTypes.any,
	type: PropTypes.any,
	filter: PropTypes.any,
};
export default BackgroundVideo;
