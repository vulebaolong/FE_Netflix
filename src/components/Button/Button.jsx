import React from "react";

function Button(props) {
	const { htmlType, className, type, size, children } = props;
	let classType = "";
	let classSize = "";

	if (type === "primary") {
		classType = "bg-primary hover:bg-primary_hover active:bg-primary_active";
	}
	// if (type === "secondary") {
	// 	classType = "bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
	// }

	if (size === "big") {
		classSize = "py-3 px-6";
	}
	if (size === "medium") {
		classSize = "py-2 px-5";
	}
	if (size === "small") {
		classSize = "py-1 px-4";
	}

	return (
		<button type={htmlType} className={`${classType} ${className} ${classSize} rounded-lg transition`}>
			{children}
		</button>
	);
}

export default Button;

{
	// <Button type="primary" size="big">
	// 		<div className="flex items-center justify-center">
	// 			<span className="text-xl font-bold">Bắt đầu </span>
	// 			<FaAngleRight size={20} />
	// 		</div>
	// </Button>
	// <Button type="primary" size="small">
	// 		<span className="text-sm font-bold">Đăng nhâp</span>
	// </Button>
}
