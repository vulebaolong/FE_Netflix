import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import style from "./ListMovie.module.css";

const ModalMovie = () => {
	const baseUrl = "https://www.youtube.com/embed/";
	const id2 = "OaDdVqW5CeE";
	const [isMuted, setIsMuted] = useState(true);
	const [playing, setPlaying] = useState(false);
	const playerRef = useRef(null);
	const imgHeroRef = useRef(null);
	const onPause = () => {
		console.log("onPause");
	};
	const onPlay = () => {
		console.log("onPlay");
	};
	const onEnded = () => {
		console.log("onEnded");
	};

	const onProgress = (e) => {
		const duration = playerRef.current.getDuration();
		const timePause = duration - 15;
		const playedSeconds = e.playedSeconds;
		// console.log("playedSeconds", playedSeconds);
		// console.log("timePause", timePause);
		// console.log(playedSeconds > timePause);
		if (playedSeconds > timePause) {
			imgHeroRef.current.classList.add(style.showImg);
			setPlaying(false);
		}
	};

    const handleMouseLeave = () => {
		// imgHeroRef.current.classList.remove(style.showImg);
		// setPlaying(false);
		const modalMovieEl = document.querySelector(".modalMovie");
		console.log("handleMouseLeave");
		if (!modalMovieEl.classList.contains("hidden")) {
			modalMovieEl.classList.add("hidden");
			modalMovieEl.classList.remove("block");
		}
	};

	return (
		<div
			className="modalMovie hidden absolute whitespace-normal w-[22.5vw] h-[500px]  bg-red-400/50
            group-hover/SwiperSlide:w-[22.5vw]
            group-hover/SwiperSlide:h-[500px]
            group-hover/SwiperSlide:block
            group-hover/SwiperSlide:bg-red-400
            group-hover/SwiperSlide:z-[200]
            overflow-hidden rounded-[0.2vw]
            z-10
            shadow-[0px_3px_10px_0px_rgba(0,0,0,0.75)]
            transition
            "
			onMouseLeave={handleMouseLeave}
		>
			<div className="absolute w-full h-full -top-[1vw]">
				{/* VIDEO */}
				<div className="absolute w-full h-1/2">
					{playing && (
						<ReactPlayer
							onPause={onPause}
							onPlay={onPlay}
							onEnded={onEnded}
							onProgress={onProgress}
							ref={playerRef}
							playing={playing}
							muted={isMuted}
							url={`${baseUrl}${id2}`}
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
					)}
				</div>

				{/* IMG */}
				<div className="absolute w-full h-1/2">
					<img
						ref={imgHeroRef}
						style={{
							width: "100%",
							height: "100%",
							transition: "opacity .4s cubic-bezier(.665,.235,.265,.8) 0s",
						}}
						className="opacity-0"
						src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf0h1TM99wLzqVvQdS-zBidBhCVOTiOcUpUcT40mufnP2HTSSTejscx5niL4HaZirkx0X0u01Eg-yyCTxLgDD4f3t_a3LxAKIf55.webp?r=4e2"
					/>
				</div>
			</div>
		</div>
	);
};

export default ModalMovie;
