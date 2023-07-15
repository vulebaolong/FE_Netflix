import PropTypes from "prop-types";
function Button(props) {
	const { children, type, className, size, htmlFor, ...rest } = props;
	let classNameType = "";
	let classNameSize = "";
	switch (type) {
		case "primary":
			classNameType = `dark:bg-primary dark:hover:bg-primaryHover dark:active:bg-primaryActive`;
			break;

		case "secondary":
			classNameType = `dark:bg-white dark:text-black dark:hover:bg-white/75 dark:active:bg-white/50 dark:active:text-black/70 `;
			break;

		case "tertiary":
			classNameType = `dark:bg-[#6d6d6e]/70 dark:text-white dark:hover:bg-[#6d6d6e]/40 dark:active:bg-[#6d6d6e]/70 dark:active:text-white/70 `;
			break;

		default:
			classNameType = `dark:bg-blue-400 dark:hover:bg-blue-500 dark:active:bg-blue-600`;
			break;
	}

	switch (size) {
		case "big":
			classNameSize = "py-3 px-6";
			break;

		case "medium":
			classNameSize = "py-2 px-6";
			break;

		case "small":
			classNameSize = "py-1 px-4";
			break;

		default:
			classNameSize = "py-3 px-6";
			break;
	}
	return (
		<button type={htmlFor} {...rest} className={`${className} ${classNameType} ${classNameSize} rounded-lg transition cursor-pointer`}>
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
