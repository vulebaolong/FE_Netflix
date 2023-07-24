import Chairs from "./Chairs";
import style from "../CheckoutPage.module.css";
import Note from "./Note";

import Screen from "./Screen";

function Left() {
	return (
		<div className="flex flex-col items-center">
			<div className="space-y-10">
				<Screen />
				<Chairs />
				<Note />
			</div>
		</div>
	);
}
export default Left;
