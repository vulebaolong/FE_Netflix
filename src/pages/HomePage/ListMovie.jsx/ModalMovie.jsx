import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { setPlayingModalMovie } from "../../../redux/slices/modalMovieSlice";
import { wait } from "../../../helpers/awaitHelper";

const ModalMovie = () => {
	const playerRef = useRef(null);
	const dispatch = useDispatch();
	const { modalMovieActive, playingModalMovie, playAgain } = useSelector((state) => state.modalMovieSlice);
	// const baseUrl = "https://www.youtube.com/embed/";
	// const id2 = "OaDdVqW5CeE";\
	// const [isMuted, setIsMuted] = useState(true);

	useEffect(() => {
		const player = playerRef?.current.getInternalPlayer();
		player?.seekTo(0);
	}, [playAgain]);

	const onPause = () => {};

	const onEnded = () => {};

	const onPlay = () => {
		const imgHeroEl = document.querySelector(".imgHero");
		imgHeroEl.style.transition = "opacity .6s cubic-bezier(.665,.235,.265,.8) 0s";
		imgHeroEl.style.opacity = 0;
	};

	const onProgress = (e) => {
		const duration = playerRef.current.getDuration();
		const timePause = duration - 15;
		const playedSeconds = e.playedSeconds;
		if (playedSeconds > 5) {
			dispatch(setPlayingModalMovie(false));
		}
	};

	const handleMouseLeave = async () => {
		const modalMovieEl = document.querySelector(".modalMovie");
		const imgHeroEl = document.querySelector(".imgHero");

		imgHeroEl.style.transition = "opacity 0.2s";
		imgHeroEl.style.opacity = 1;
		modalMovieEl.style.transform = "scale(1)";

		await wait(300);

		modalMovieEl.style.display = "none";

		dispatch(setPlayingModalMovie(false));
	};

	return (
		<div
			className="modalMovie absolute whitespace-normal   
            z-10 cursor-pointer
            shadow-[0px_3px_10px_0px_rgba(0,0,0,0.75)]
            "
			style={{ transition: "transform 0.3s", transform: "scale(1)", top: "0", left: "0" }}
			onMouseLeave={handleMouseLeave}
		>
			<div className="absolute w-full aspect-[341/192] overflow-hidden rounded-t-[0.2vw] cursor-pointer">
				{/* VIDEO */}
				<div className="absolute w-full aspect-[341/192] z-[1] overflow-hidden cursor-pointer">
					{
						<div className="absolute w-[114%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-[341/192] cursor-pointer">
							<ReactPlayer
								onPause={onPause}
								onPlay={onPlay}
								onEnded={onEnded}
								onProgress={onProgress}
								ref={playerRef}
								playing={playingModalMovie}
								muted={true}
								// url={`${baseUrl}${id2}`}
								url={`${modalMovieActive.trailer}`}
								width="100%"
								height="100%"
								config={{
									youtube: {
										playerVars: {
											origin: "https://localhost:5173/home",
										},
									},
								}}
							/>
						</div>
					}
				</div>

				{/* IMG */}
				<div className="absolute aspect-[341/192] z-[2] cursor-pointer">
					<img
						style={{
							opacity: 1,
							width: "100%",
							height: "100%",
							// transition: "opacity .4s cubic-bezier(.665,.235,.265,.8) 0s",
						}}
						className="imgHero object-cover cursor-pointer"
						src={modalMovieActive.hinhAnh}
					/>
				</div>
			</div>
			<div className="w-full aspect-[341/192] cursor-pointer"></div>
			<div className="bg-red-400/50 h-[100px] cursor-pointer"></div>
		</div>
	);
};

export default ModalMovie;
