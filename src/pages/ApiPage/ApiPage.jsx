import SwaggerUIComponent from "./SwaggerUIComponent";
function ApiPage() {
	return (
		<div
			className=" pt-header relative
		sm:pt-header_sm
		md:pt-header_md
		lg:pt-header_lg
		xl:pt-header_xl
		2xl:pt-header_2xl"
		>
			<SwaggerUIComponent />
		</div>
	);
}
export default ApiPage;
