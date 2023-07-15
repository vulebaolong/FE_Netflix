import ReactPlayer from "react-player/youtube";
import Button from "./../../components/Button/Button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { userApi } from "../../api/userApi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa6";
import { Typography } from "antd";
const { Paragraph } = Typography;

function HomePage() {
	const baseUrl = "https://www.youtube.com/embed/";
	const id1 = "8byLfSZjLNo";
	const id2 = "OaDdVqW5CeE";
	const id3 = "xY-qRGC6Yu0";
	const id4 = "SxnY2E_uMtY";
	const [isMuted, setIsMuted] = useState(true);
	const [listMovie, setListMovie] = useState([]);

	const playerRef = useRef(null);
	const toggleMute = () => {
		setIsMuted(!isMuted);
	};

	useEffect(() => {
		axios.get(userApi.getListMoive).then((result) => {
			const { data } = result;
			setListMovie(data.content);
		});
	}, []);

	return (
		<div className="bg-backgroundHome">
			<div className="h-[56.25vw] w-full -mt-[11.5%] -mb-[3.7%] relative">
				<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center">
					<div className="container-home">
						<div className="w-[36%]">
							<h1 className="heading-1 truncate">{listMovie[1]?.tenPhim}</h1>
							<Paragraph
								ellipsis={{
									rows: 5,
								}}
								className="para-1"
							>
								{listMovie[1]?.moTa}
							</Paragraph>
							<div className="flex gap-3">
								<Button className="flex items-center gap-3" type="secondary" size="medium">
									<div>
										<FaPlay size={25} />
									</div>
									<span className="text-lg font-bold ">Phát</span>
								</Button>
								<Button className="flex gap-3 items-center" type="tertiary" size="medium">
									<div>
										<AiOutlineInfoCircle size={25} />
									</div>
									<span className="text-lg font-bold ">Thông tin khác</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<ReactPlayer
					ref={playerRef}
					playing={true}
					muted={isMuted}
					url={`${baseUrl}${id4}`}
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
				<div
					style={{
						height: "14.7vw",
						position: "absolute",
						width: "100%",
						opacity: "1",
						backgroundPosition: "0 top",
						backgroundRepeat: "repeat-x",
						backgroundSize: "100% 100%",
						bottom: "0",
						backgroundColor: "transparent",
						backgroundImage: "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)",
					}}
				></div>
			</div>

			<div className="bg-backgroundHome w-full relative h-96">
				<Button className="relative z-0" onClick={toggleMute} type="primary" size="big">
					play
				</Button>
			</div>
			<div className="bg-blue-400/50 w-full relative h-96">
				<Button className="relative z-0" onClick={toggleMute} type="primary" size="big">
					play
				</Button>
			</div>
		</div>
	);
}
export default HomePage;
