import PropTypes from "prop-types";

function IconPlus({ ...rest }) {
	return (
		<div {...rest}>
			<svg width={"100%"} height={"100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-0 e1mhci4z1" data-name="Plus" aria-hidden="true">
				<path fillRule="evenodd" clipRule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor" />
			</svg>
		</div>
	);
}

IconPlus.propTypes = {
	width: PropTypes.any,
	height: PropTypes.any,
};
export default IconPlus;
