import style from "../CheckoutPage.module.css"

function Screen() {
	return (
		<div className={`${style.screen}  bg-slate-600 shadow-lg flex items-end justify-center mb-20`}>
			<span className="text-white">Màn hình</span>
		</div>
	);
}
export default Screen;
