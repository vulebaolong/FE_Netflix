import PropTypes from "prop-types";
import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
	const { children, type, className, size, htmlFor, ...rest } = props;
	let classNameType = "";
	let classNameSize = "";
	switch (type) {
		case "primary":
			classNameType = `rounded-lg dark:bg-primary dark:hover:bg-primaryHover dark:active:bg-primaryActive`;
			break;

		case "secondary":
			classNameType = `rounded-lg dark:bg-white dark:text-black dark:hover:bg-white/75 dark:active:bg-white/50 dark:active:text-black/70 `;
			break;

		case "tertiary":
			classNameType = `rounded-lg dark:bg-[#6d6d6e]/70 dark:text-white dark:hover:bg-[#6d6d6e]/40 dark:active:bg-[#6d6d6e]/70 dark:active:text-white/70 `;
			break;

		case "tertiary-blue":
			classNameType = `rounded-lg dark:bg-[#0080ff] dark:text-white dark:hover:bg-[#0080ff]/70 dark:active:bg-[#0080ff]/40 `;
			break;

		case "circle":
			classNameType = `bg-transparent hover:bg-white/10 active:bg-white/70 border border-solid border-white/70 text-white rounded-full`;
			break;

		case "circle-white":
			classNameType = `bg-white hover:bg-white/80 active:bg-white/60 border border-solid border-white/70 text-white rounded-full`;
			break;

		case "navigattion":
			classNameType = ` `;
			break;

		default:
			break;
	}

	switch (size) {
		case "big":
			classNameSize = "py-3 px-6";
			break;

		case "medium":
			classNameSize = "py-2 px-5";
			break;

		case "small":
			classNameSize = "py-1 px-4";
			break;

		default:
			classNameSize = size;
			break;
	}
	return (
		<button ref={ref} type={htmlFor} {...rest} className={`${className} ${classNameType} ${classNameSize} transition cursor-pointer`}>
			{children}
		</button>
	);
});
Button.displayName = "Button";
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
