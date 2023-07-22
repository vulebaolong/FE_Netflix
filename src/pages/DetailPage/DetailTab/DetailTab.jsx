import { useSelector } from "react-redux";

function DetailTab() {
	const { movieShowtime } = useSelector((state) => state.cinemaSlice);

  return (
    <section>DetailTab</section>
  )
}
export default DetailTab