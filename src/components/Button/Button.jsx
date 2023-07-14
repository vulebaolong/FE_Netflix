import PropTypes from "prop-types";
function Button(props) {
	const { children, type, className, size, htmlFor, ...rest } = props;
	let classNameType = "";
	let classNameSize = "";
	switch (type) {
		case "primary":
			classNameType = `dark:bg-primary dark:hover:bg-primaryHover dark:active:bg-primaryActive `;
			break;

		default:
			break;
	}

	switch (size) {
		case "big":
			classNameSize = "py-3 px-6";
			break;

		case "small":
			classNameSize = "py-1 px-4";
			break;

		default:
			break;
	}
	return (
		<button type={htmlFor} {...rest} className={`${className} ${classNameType} ${classNameSize} rounded-lg transition flex items-center justify-center gap-1 cursor-pointer`}>
			{children}
		</button>
	);
}

Button.propTypes = {
	// ⛔️ incorrect prop type
	children: PropTypes.any,
	htmlFor: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.string,
	// You can declare that a prop is a specific JS primitive.
	// By default, these are all optional.
	optionalArray: PropTypes.array,
	optionalBigInt: PropTypes.bigint,
	optionalBool: PropTypes.bool,
	optionalFunc: PropTypes.func,
	optionalNumber: PropTypes.number,
	optionalObject: PropTypes.object,
	optionalString: PropTypes.string,
	optionalSymbol: PropTypes.symbol,
};

export default Button;
