import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { wait } from "../../../helpers/awaitHelper";
import Button from "../../../components/Button/Button";
import IconMute from "../../../components/Icons/IconMute";
import IconUnMute from "../../../components/Icons/IconUnMute";
import { hideBtnMuteModalMovie, hideImgModalMovie, showBtnMuteModalMovie, showImgModalMovie } from "../../../helpers/modalMovieHelper";
import IconPlay from "./../../../components/Icons/IconPlay";
import IconPlus from "./../../../components/Icons/IconPlus";
import IconLike from "../../../components/Icons/IconLike";
import IconChevronDown from "./../../../components/Icons/IconChevronDown";
import { Tag, Typography, Tooltip } from "antd";
import { COLOR_PRIMARY } from "./../../../../tailwind.config";
import { setPlayingBannerREDU } from "../../../redux/slices/bannerHomeSlice";
import { navigate } from "../../../App";
import { setIsOpenModalMovieREDU } from "../../../redux/slices/modalMovieSlice";
const { Paragraph } = Typography;

const ModalMovie = () => {
	const playerRef = useRef(null);

	const dispatch = useDispatch();

	const [playing, setPlaying] = useState(false);

	const { modalMovieActive, locationMovieEl, isOpenModalMovie } = useSelector((state) => state.modalMovieSlice);

	const { endedBanner } = useSelector((state) => state.bannerHomeSlice);

	const [isMuted, setIsMuted] = useState(true);

	const handlePlayAgain = () => {
		const player = playerRef?.current.getInternalPlayer();
		player?.seekTo(0);
	};

	const toggleMute = () => {
		if (playing) {
			setIsMuted(!isMuted);
		}
		if (!playing) {
			handlePlayAgain();
		}
	};

	const renderIconVideo = () => {
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
	};

	const onPause = () => {
		hideBtnMuteModalMovie();
		showImgModalMovie("opacity .6s cubic-bezier(.665,.235,.265,.8) 0s");
	};

	const onEnded = () => {};

	const onPlay = () => {
		showBtnMuteModalMovie();
		hideImgModalMovie("opacity .6s cubic-bezier(.665,.235,.265,.8) 0s");
	};

	const onProgress = (e) => {
		const duration = playerRef.current.getDuration();
		const timePause = duration - 15;
		const playedSeconds = e.playedSeconds;
		if (playedSeconds > timePause) {
			setPlaying(false);
		}
	};

	const handleMouseLeave = async () => {
		const modalMovieEl = document.querySelector(".modalMovie");

		showImgModalMovie("opacity 0.2s");

		hideBtnMuteModalMovie();

		modalMovieEl.style.transform = "scale(1)";

		await wait(300);

		modalMovieEl.style.display = "none";

		setPlaying(false);

		dispatch(setIsOpenModalMovieREDU(false));

		if (!endedBanner) {
			dispatch(setPlayingBannerREDU(true));
			console.log("OKE");
		}
	};

	const handleMuaVe = () => {
		navigate(`/detail/${modalMovieActive._id}#detailTab`);
	};

	const handleThongTinChiTiet = () => {
		navigate(`/detail/${modalMovieActive._id}`);
	};

	useEffect(() => {
		if (!locationMovieEl) return;
		if (!isOpenModalMovie) return;
		showImgModalMovie("opacity 0s");
		locationViewModalMovie(locationMovieEl);
		dispatch(setPlayingBannerREDU(false));
		console.log("OKE");
		handlePlayAgain();
		setPlaying(true);

		// return () => {
		// 	handleMouseLeave();
		// };
	}, [locationMovieEl]);

	const locationViewModalMovie = (locationMovieEl) => {
		// modalMovieEl là modal sở popup khi hover
		// movieEl là từng movie nằm trong slide
		const modalMovieEl = document.querySelector(".modalMovie");
		modalMovieEl.style.display = "block";

		// viewport tới đỉnh của trang web
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		// VIEW PORT
		const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
		console.log("viewportWidth", viewportWidth);
		// const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

		// MOVIE
		const top = locationMovieEl.top;
		const left = locationMovieEl.left;
		const right = locationMovieEl.right;
		const widthMovieEl = locationMovieEl.width;
		// const heightMovieEl = locationMovieEl.height;

		// SET CHIEEUF CAO CHO MODAL MOVIE
		modalMovieEl.style.width = `${widthMovieEl}px`;

		// MODAL MOVIE
		const rectModalMovie = modalMovieEl.getBoundingClientRect();
		const widthModalMovieEl = rectModalMovie.width;
		// const heightModalMovieEl = rectModalMovie.height;

		// TÍNH RA PHẦN TRĂM
		// const topPercentage = (top / viewportHeight) * 100;
		const leftPercentage = Math.round((left / viewportWidth) * 100);

		// await wait(500);
		// Hiện modal movie
		modalMovieEl.style.transform = "scale(1.5)";

		// PHẢI
		if (leftPercentage > 75) {
			// modalMovieEl.style.top = `${top + scrollTop + heightMovieEl / 2 - heightModalMovieEl / 2}px`;
			modalMovieEl.style.top = `${top + scrollTop}px`;
			modalMovieEl.style.left = `${right - widthModalMovieEl}px`;
			modalMovieEl.style.width = `${widthMovieEl}px`;
			modalMovieEl.style.transformOrigin = "center right";
			console.log("PHẢI");
		}

		// TRÁI
		if (leftPercentage < 10) {
			// modalMovieEl.style.top = `${top + scrollTop + heightMovieEl / 2 - heightModalMovieEl / 2}px`;
			modalMovieEl.style.top = `${top + scrollTop}px`;
			modalMovieEl.style.left = `${left}px`;
			modalMovieEl.style.width = `${widthMovieEl}px`;
			modalMovieEl.style.transformOrigin = "center left";
			console.log("TRÁI");
		}

		// GIỮA
		if (!(leftPercentage < 10) && !(leftPercentage > 75)) {
			// modalMovieEl.style.top = `${top + scrollTop + heightMovieEl / 2 - heightModalMovieEl / 2}px`;
			modalMovieEl.style.top = `${top + scrollTop}px`;
			modalMovieEl.style.left = `${left + widthMovieEl / 2 - widthModalMovieEl / 2}px`;
			modalMovieEl.style.transformOrigin = "center center";
			console.log("GIỮA");
		}
	};

	return (
		<div
			className="modalMovie absolute whitespace-normal 
            z-10 hidden
            shadow-[0px_3px_10px_0px_rgba(0,0,0,0.75)]
            "
			style={{ transition: "transform 0.3s", transform: "scale(1)", top: "0", left: "0" }}
			onMouseLeave={handleMouseLeave}
		>
			<div className="absolute w-full aspect-[341/192] overflow-hidden rounded-t-[0.2vw] ">
				{/* VIDEO */}
				<div className="absolute w-full aspect-[341/192] z-[1] overflow-hidden ">
					{
						<div className="absolute w-[114%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-[341/192] ">
							<ReactPlayer
								onPause={onPause}
								onPlay={onPlay}
								onEnded={onEnded}
								onProgress={onProgress}
								ref={playerRef}
								playing={playing}
								muted={isMuted}
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

				{/* MUTE */}
				<Button
					onClick={toggleMute}
					type="circle"
					className="btnMuteModalMovie absolute z-[2] scale-[0.7] bottom-0 right-0"
					size="
						p-[0.2rem]
						sm:p-[0.4rem]
						md:p-[0.5rem]
						lg:p-[0.7rem]
						"
				>
					{renderIconVideo()}
				</Button>

				{/* IMG */}
				<div className="absolute aspect-[341/192] z-[3] ">
					<img
						style={{
							opacity: 1,
							width: "100%",
							height: "100%",
							// transition: "opacity .4s cubic-bezier(.665,.235,.265,.8) 0s",
						}}
						className="imgModalMovie object-cover "
						src={modalMovieActive.hinhAnh}
					/>
				</div>
			</div>
			<div className="w-full aspect-[341/192] "></div>
			<div className=" bg-[#181818] overflow-hidden rounded-b-[0.2vw]">
				{/* BUTTON */}
				<div className="flex justify-between items-center py-2">
					<div className="-space-x-2">
						<Tooltip color={"#e5e5e5"} title={<span className="text-[#181818] text-base font-bold">Mua vé</span>}>
							<Button
								type="circle-white"
								className="bg-white scale-[0.7]"
								size="
								p-[0.2rem]
								sm:p-[0.4rem]
								md:p-[0.5rem]
								lg:p-[0.7rem]
								"
								onClick={handleMuaVe}
							>
								{
									<IconPlay
										className=" text-black
                                    w-2 h-2
                                    sm:w-3 sm:h-3
                                    md:w-4 md:h-4
                                    lg:w-4 lg:h-4
                                    xl:w-5 xl:h-5
                                    2xl:w-6 2xl:h-6
                                    "
									/>
								}
							</Button>
						</Tooltip>
						<Tooltip color={"#e5e5e5"} title={<span className="text-[#181818] text-base font-bold">Thêm vào Danh sách của tôi</span>}>
							<Button
								type="circle"
								className=" scale-[0.7]"
								size="
						p-[0.2rem]
						sm:p-[0.4rem]
						md:p-[0.5rem]
						lg:p-[0.7rem]
						"
							>
								{
									<IconPlus
										className="
                                    w-2 h-2
                                    sm:w-3 sm:h-3
                                    md:w-4 md:h-4
                                    lg:w-4 lg:h-4
                                    xl:w-5 xl:h-5
                                    2xl:w-6 2xl:h-6
                                    "
									/>
								}
							</Button>
						</Tooltip>
						<Tooltip color={"#e5e5e5"} title={<span className="text-[#181818] text-base font-bold">Thích</span>}>
							<Button
								type="circle"
								className=" scale-[0.7]"
								size="
						p-[0.2rem]
						sm:p-[0.4rem]
						md:p-[0.5rem]
						lg:p-[0.7rem]
						"
							>
								{
									<IconLike
										className=" 
                                    w-2 h-2
                                    sm:w-3 sm:h-3
                                    md:w-4 md:h-4
                                    lg:w-4 lg:h-4
                                    xl:w-5 xl:h-5
                                    2xl:w-6 2xl:h-6
                                    "
									/>
								}
							</Button>
						</Tooltip>
					</div>
					<Tooltip color={"#e5e5e5"} title={<span className="text-[#181818] text-base font-bold">Thông tin chi tiết</span>}>
						<Button
							type="circle"
							className="scale-[0.7]"
							size="
							p-[0.2rem]
							sm:p-[0.4rem]
							md:p-[0.5rem]
							lg:p-[0.7rem]
							"
							onClick={handleThongTinChiTiet}
						>
							{
								<IconChevronDown
									className=" 
                                    w-2 h-2
                                    sm:w-3 sm:h-3
                                    md:w-4 md:h-4
                                    lg:w-4 lg:h-4
                                    xl:w-5 xl:h-5
                                    2xl:w-6 2xl:h-6
                                    "
								/>
							}
						</Button>
					</Tooltip>
				</div>

				{/* TITLE */}
				<div className="whitespace-normal px-2 flex gap-2 items-center">
					<h3 className="text-base font-bold truncate">{modalMovieActive.tenPhim}</h3>
					<Tag className="text-[7px] font-extrabold leading-normal" color={COLOR_PRIMARY}>
						HOT
					</Tag>
				</div>

				{/* TAG */}
				<div className="px-2 flex flex-wrap">
					<Tag color="red" className="text-[8px] mt-1 font-bold leading-normal">
						18+
					</Tag>
					{modalMovieActive.sapChieu && (
						<Tag color="green" className="text-[8px] mt-1 font-normal leading-normal">
							Sắp chiếu
						</Tag>
					)}
					{modalMovieActive.dangChieu && (
						<Tag color="gold" className="text-[8px] mt-1 font-normal leading-normal">
							Đang chiếu
						</Tag>
					)}
				</div>

				{/* DESCRIPTION */}
				<div className="px-2 pt-2 pb-4">
					<Paragraph ellipsis={{ rows: 3 }} className="text-[10px] !mb-0 ">
						<span className="text-xs font-bold">Mô tả: </span>
						{modalMovieActive.moTa}
					</Paragraph>
				</div>
			</div>
		</div>
	);
};

export default ModalMovie;
