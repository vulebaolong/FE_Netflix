import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./custom-swagger-theme.css";

function SwaggerUIComponent() {
	return (
		<section className="pb-24">
			<div className="container">
				<SwaggerUI url=" http://localhost:3001/api/v1/QuanLySwagger/Swagger" />
			</div>
		</section>
	);
}
export default SwaggerUIComponent;
