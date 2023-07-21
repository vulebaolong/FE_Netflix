import { useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import style from "./Banner.module.css";
import Button from "../../../components/Button/Button";
import IconPlay from "../../../components/Icons/IconPlay";
import IconInfo from "../../../components/Icons/IconInfo";
import IconMute from "../../../components/Icons/IconMute";
import IconUnMute from "../../../components/Icons/IconUnMute";
import IconRotate from "../../../components/Icons/IconRotate";
import PropTypes from "prop-types";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setEndedBannerREDU, setPlayingBannerREDU } from "../../../redux/slices/bannerHomeSlice";
import { navigate } from "../../../App";
const { Paragraph } = Typography;

function Banner({ listMovie }) {
	const dispatch = useDispatch();
	const { playingBanner } = useSelector((state) => state.bannerHomeSlice);
	const randomIndex = useMemo(() => Math.floor(Math.random() * listMovie.length), [listMovie]);
	const movie = listMovie[randomIndex];
	const url = movie?.trailer;

	// const baseUrl = "https://www.youtube.com/embed/";
	// const id2 = "OaDdVqW5CeE";

	const [isMuted, setIsMuted] = useState(true);

	const playerRef = useRef(null);
	const imgHeroRef = useRef(null);

	const handlePlayAgain = () => {
		const player = playerRef.current.getInternalPlayer();
		player.seekTo(0);
		dispatch(setPlayingBannerREDU(true));
		dispatch(setEndedBannerREDU(false));
		imgHeroRef.current.classList.remove(style.showImg);
	};
	const toggleMute = () => {
		if (playingBanner) {
			setIsMuted(!isMuted);
		}
		if (!playingBanner) {
			handlePlayAgain();
		}
	};
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
			dispatch(setPlayingBannerREDU(false));
			dispatch(setEndedBannerREDU(true));
		}
	};
	const renderIconVideo = () => {
		if (playingBanner) {
			if (isMuted) {
				return (
					<IconMute
						className="
                        w-2 h-2
                        sm:w-3 sm:h-3
                        md:w-4 md:h-4
                        lg:w-4 lg:h-4
                        xl:w-5 xl:h-5
                        2xl:w-6 2xl:h-6
                        "
					/>
				);
			}
			if (!isMuted) {
				return (
					<IconUnMute
						className="
                        w-3 h-3
                        sm:w-3 sm:h-3
                        md:w-4 md:h-4
                        lg:w-4 lg:h-4
                        xl:w-5 xl:h-5
                        2xl:w-6 2xl:h-6
                        "
					/>
				);
			}
		}
		if (!playingBanner) {
			return (
				<IconRotate
					className="
                    w-2 h-2
                    sm:w-3 sm:h-3
                    md:w-4 md:h-4
                    lg:w-4 lg:h-4
                    xl:w-5 xl:h-5
                    2xl:w-6 2xl:h-6
                    "
				/>
			);
		}
	};

	const handleBuyMovie = (movie) => {
		console.log(movie);
		navigate(`/detail/${movie.maPhim}`)
	};
	return (
		<section
			className="banner aspect-[1920/1080] w-full relative 
			-mb-[50px]
			sm:-mb-[90px]
			md:-mb-[110px]
			lg:-mb-[140px]
			xl:-mb-[170px]
			2xl:-mb-[250px]
			"
		>
			{/* VIDEO -top-[3.2vw]*/}
			<div className="VIDEO absolute w-full aspect-[1920/1080] overflow-hidden">
				<div className="absolute w-[114%] aspect-[1920/1080] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<ReactPlayer
						onPause={onPause}
						onPlay={onPlay}
						onEnded={onEnded}
						onProgress={onProgress}
						ref={playerRef}
						playing={playingBanner}
						muted={isMuted}
						// url={`${baseUrl}${id2}`}
						url={`${url}`}
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
			</div>

			{/* IMG */}
			<div className="IMG absolute w-full h-full">
				<img
					ref={imgHeroRef}
					style={{
						width: "100%",
						height: "100%",
						transition: "opacity .4s cubic-bezier(.665,.235,.265,.8) 0s",
					}}
					className="opacity-0 object-cover"
					src={movie?.hinhAnh}
				/>
			</div>

			{/* VIGNETTE */}
			<div
				className="VIGNETTE w-full h-full absolute top-0 left-0"
				style={{
					background: "linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(20,20,20,0) 51%, rgba(20,20,20,0.8) 80%, rgba(20,20,20,1) 100%)",
				}}
			></div>

			{/* TEXT AND SOUND*/}
			<div className="TEXTANDSOUND absolute w-full h-full flex">
				{/* TEXT */}
				<div
					className="container-home flex items-end h-full
                    justify-center
                    xl:justify-start
                    "
				>
					<div
						className="mb-[21.9%]
                        w-[70%]
                        xl:w-[38%]
                        "
					>
						<h1
							className="font-black truncate leading-none
                            text-base text-center mb-2
                            sm:text-2xl sm:mb-4
                            lg:text-4xl
                            xl:text-start
                            "
						>
							{movie?.tenPhim}
						</h1>
						<Paragraph
							ellipsis={{
								rows: 5,
							}}
							className="font-medium text-[1.2vw] text-white
                            hidden
                            xl:[display:-webkit-box]
                            "
						>
							{movie?.moTa}
						</Paragraph>
						<div
							className="flex gap-3
                            mt-3 justify-center
                            xl:mt-0 xl:justify-start
                            "
						>
							<Button
								onClick={() => {
									handleBuyMovie(movie);
								}}
								className="flex items-center
								py-0 px-2 gap-1
                                sm:py-1 sm:px-2 sm:gap-3
                                md:py-2 md:px-3
                                lg:py-2 lg:px-4
                                xl:py-3 xl:px-5
                                2xl:py-3 2xl:px-6
								"
								type="secondary"
							>
								<IconPlay
									className="
                                    w-2 h-2
                                    sm:w-3 sm:h-3
                                    md:w-4 md:h-4
                                    lg:w-4 lg:h-4
                                    xl:w-5 xl:h-5
                                    2xl:w-6 2xl:h-6
                                    "
								/>
								<span
									className=" font-semibold
                                    text-[10px]
                                    sm:text-sm
                                    md:text-sm
                                    lg:text-base
                                    xl:text-2xl
                                    2xl:text-2xl
                                    "
								>
									Mua vé
								</span>
							</Button>
							<Button
								className=" gap-3 items-center
                                hidden
                                xl:flex xl:py-3 xl:px-5
                                2xl:py-3 2xl:px-6
                                "
								type="tertiary"
							>
								<IconInfo width={35} height={35} />
								<span className="text-2xl font-semibold ">Thông tin khác</span>
							</Button>
						</div>
					</div>
				</div>

				{/* SOUND */}
				<div className="absolute bottom-[35.7%] right-0 ">
					<div
						className="flex items-center
                        gap-2
                        sm:gap-2
                        md:gap-3
                        lg:gap-4
                        2xl:gap-5
                        "
					>
						<Button
							onClick={toggleMute}
							type="circle"
							size="p-[0.2rem]
                            sm:p-[0.4rem]
                            md:p-[0.5rem]
                            lg:p-[0.7rem]
                            "
							// p-[0.8rem]
						>
							{renderIconVideo()}
						</Button>
						<div
							className="flex items-center bg-[#333333]/60   border-l-[3px]
                            w-10 py-0 pl-1
                            sm:w-16 sm:py-1 sm:pl-2
                            md:w-20 md:py-2 md:pl-4
                            lg:w-32 lg:py-2 lg:pl-5
                            "
						>
							<span
								className="text-[10px] font-medium
                                sm:text-xs
                                lg:text-base
                                xl:text-xl
                                2xl:text-2xl
                                "
							>
								18+
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
Banner.propTypes = {
	listMovie: PropTypes.array,
};

export default Banner;
