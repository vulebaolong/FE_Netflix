function HomePage() {
	const videoUrl = "https://www.youtube.com/embed/OaDdVqW5CeE?autoplay=1&mute=1&controls=1";

	return (
		<div className="  bg-slate-700">
			<div className="h-[56.25vw] w-full">
				<iframe
					width="100%"
					height="100%"
					src={videoUrl}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}
export default HomePage;
