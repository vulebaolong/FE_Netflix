import Left from "./Left/Left";
import Right from "./Right/Right";
import Step from "./Step/Step";

function CheckoutPage() {
	return (
		<section
			className="pt-header bg-backgroundHome
			sm:pt-header_sm
			md:pt-header_md
			lg:pt-header_lg
			xl:pt-header_xl
			2xl:pt-header_2xl"
		>
			<Step />
			<div className="container">
				<div className="flex flex-col lg:flex-row w-full justify-between items-center gap-5">
					<Left />
					<Right />
				</div>
			</div>
		</section>
	);
}
export default CheckoutPage;
