import { useEffect } from "react";
import { navigate } from "../../../App";
import Button from "../../../components/Button/Button";
import { wait } from "../../../helpers/awaitHelper";

function Logout() {
	const delay30Second = async () => {
		await wait(30000);
		navigate("/");
	};
	useEffect(() => {
		delay30Second();
	}, []);

	return (
		<div
			className="bg-backgroundHome max-w-lg w-full rounded-2xl
            p-9
            sm:p-12
            lg:p-14
            2xl:p-16
            "
		>
			<h1 className="text-4xl font-semibold mb-10">Chia tay sớm vậy sao?</h1>
			<p className="text-xl mb-5">
				Nhắc nhỏ nè, không phải lúc nào bạn cũng cần đăng xuất khỏi Netflix đâu. Điều này chỉ cần thiết nếu bạn đang dùng máy tính công cộng hoặc dùng chung.
			</p>
			<p className="text-xl mb-5">Bạn sẽ được điều hướng tới Netflix.com sau 30 giây nữa.</p>
			<Button
				onClick={() => {
					navigate("/");
				}}
				className="w-full"
				type="tertiary-blue"
				size="big"
			>
				<span className="font-medium text-xl">Thoát ngay</span>
			</Button>
		</div>
	);
}
export default Logout;
