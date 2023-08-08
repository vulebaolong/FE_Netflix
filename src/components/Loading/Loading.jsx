import { useSelector } from "react-redux";
import LoadingPlayer from "./LoadingPlayer";

function Loading() {
	const { isLoading } = useSelector((state) => state.loadingSlice);

	return <>{isLoading && <LoadingPlayer />}</>;
}
export default Loading;
