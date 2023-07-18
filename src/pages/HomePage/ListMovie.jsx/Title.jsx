import { FaAngleRight } from "react-icons/fa6";
import PropTypes from "prop-types";

function Title({ children }) {
	return (
		<div
			className="container-home 
					mb-2
					sm:mb-3
					md:mb-4
					lg:mb-4
					xl:mb-5
					"
		>
			<div className=" flex items-baseline group/title w-fit cursor-pointer">
				<h2
					className=" font-medium text-[#e5e5e5] group-hover/title:text-[#fff] transition
							text-[10px]
							sm:text-sm
							md:text-base
							lg:text-lg
							xl:text-xl
							2xl:text-2xl
							"
				>
					{children}
				</h2>
				<div className=" flex items-center text-[#54b9c5] ">
					<div
						className="font-semibold max-w-0 opacity-0 whitespace-nowrap
								
								group-hover/title:max-w-[200px]
								group-hover/title:opacity-100
								text-[8px] group-hover/title:translate-x-[5px] mr-2
								sm:text-[9px]
								md:text-[10px] md:group-hover/title:translate-x-[8px] 
								lg:text-xs lg:group-hover/title:translate-x-[10px] lg:mr-3
								xl:text-sm xl:group-hover/title:translate-x-[12px] xl:mr-4
								2xl:text-base 2xl:group-hover/title:translate-x-[15px] 2xl:mr-[17px]
								"
						style={{
							transition: "max-width 1s,opacity 1s,transform .75s",
						}}
					>
						Xem tất cả
					</div>
					<FaAngleRight
						className="font-bold group-hover/title:opacity-100
								text-[8px]
								sm:text-[9px]
								md:text-[10px]
								lg:text-[11px]
								xl:text-[14px]
								2xl:text-base
								"
					/>
				</div>
			</div>
		</div>
	);
}

Title.propTypes = {
	children: PropTypes.any,
};

export default Title;
