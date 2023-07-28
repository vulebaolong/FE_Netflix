import  style from "../CheckoutPage.module.css";
import { Typography } from "antd";
import PropTypes from "prop-types";
const { Text } = Typography;

function Ghe({ type, note, onClick, element }) {
	return (
		<div className="flex flex-col items-center gap-2" onClick={onClick}>
			<div className={`${style.ghe} ${style[type]}`}>
				<div>{element}</div>
				<div></div>
			</div>
			{note && (
				<Text ellipsis={{ tooltip: note }} className="text-xs text-slate-500 dark:text-slate-400">
					{note}
				</Text>
			)}
		</div>
	);
}

Ghe.propTypes = {
	type: PropTypes.any,
	note: PropTypes.any,
	onClick: PropTypes.any,
	element: PropTypes.any,
};

export default Ghe;
