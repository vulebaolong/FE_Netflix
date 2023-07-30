import { Player, Controls } from "@lottiefiles/react-lottie-player";
import loading from "../../assets/loading/logo_animation.json";
import { useSelector } from "react-redux";

function Loading() {
	const { isLoading } = useSelector((state) => state.loadingSlice);
	return (
		<>
			{isLoading && (
				<div className="fixed z-[1002] w-screen h-screen top-0 left-0 bg-black flex items-center justify-center">
					<Player autoplay speed={3} loop src={loading} style={{ height: "300px", width: "300px" }}>
						{/* <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} /> */}
					</Player>
				</div>
			)}
		</>
	);
}
export default Loading;
{
	/*  */
}
