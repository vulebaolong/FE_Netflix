import { FaRegCircleXmark, FaAngleRight } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import { v4 as uuidv4 } from "uuid";
import style from "./StartWithMail.module.css";
import { useRef } from "react";

function StartWithMail() {
	const randomUUID = uuidv4();

	const errorRef = useRef(null);

	const inputRef = useRef(null);

	const mesErrorRef = useRef(null);

	const isOnChangeRef = useRef(false);

	const validate = (value) => {
		const inputEl = inputRef.current;

		const errorEl = errorRef.current;

		const mesErrorEl = mesErrorRef.current;

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		const openError = (mes) => {
			// tin nhắn lỗi
			mesErrorEl.innerText = mes;

			// xoá border màu xanh
			inputEl.classList.remove(style.success);

			// thêm border màu dỏ
			inputEl.classList.add(style.openError);

			// hiển thông báo lỗi
			errorEl.classList.add(style.openError);
		};

		const closeError = () => {
			// thêm border màu xanh
			inputEl.classList.add(style.success);

			// xoá border màu đỏ
			inputEl.classList.remove(style.openError);

			// ẩn thông báo lỗi
			errorEl.classList.remove(style.openError);
		};

		// Không có lỗi
		if (emailRegex.test(value)) closeError();

		// Có lỗi
		if (!emailRegex.test(value)) openError("Vui lòng nhập địa chỉ email hợp lệ.");

		// Có lỗi rỗng
		if (value.trim() === "") openError("Bạn cần nhập email.");
	};

	const handleButton = () => {
		// errorRef.current.classList.add(style.openError);
	};

	const handleOnblurInput = () => {
		const valueInput = inputRef.current.value;

		// nếu onChange đã được kích hoạt sẽ không kiểm tra rỗng ở đây
		// mà sẽ kiểm tra rỗng bên trong validate

		// nếu onChage chưa được kích hoạt sẽ kiểm tra rỗng
		// nếu rỗng sẽ quay lại không đi tiếp
		if (!isOnChangeRef.current) if (valueInput.trim() === "") return;

		// onChange input sẽ được kích hoạt khi phải ghi bất kỳ dữ liệu nào đó
		isOnChangeRef.current = true;

		validate(valueInput);
	};

	const handleOnChangeInput = () => {
		if (isOnChangeRef.current) {
			const value = inputRef.current.value;
			validate(value);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();

		inputRef.current.focus();

		if (!isOnChangeRef.current) return

		inputRef.current.required = true
		
		const valueInput = inputRef.current.value;

		validate(valueInput);
	};

	return (
		<div data-aos-delay="700" data-aos="fade-left" data-aos-duration="1000">
			<h3 className="heading-3 text-center">Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</h3>
			<form onSubmit={onSubmit}>
				<div className="flex flex-col lg:flex-row gap-3 justify-center mt-4">
					<div className="relative w-full lg:w-1/2 2xl:w-2/5">
						<input
							maxLength="50"
							minLength="5"
							type="email"
							autoComplete="email"
							id={`floating_filled${randomUUID}`}
							className={`${style.input}
							text-sm pb-2 pt-4
							sm:text-base sm:pb-[0.3rem] sm:pt-[1.2rem]
							md:pt-[1.4rem]
							lg:text-xl lg:pb-[0.3] lg:pt-[1.6]
							font-semibold block transition rounded-lg px-[0.9rem] w-full text-gray-900 bg-gray-50 dark:bg-gray-700/50  appearance-none dark:text-white focus:outline-none focus:ring-0  peer`}
							placeholder=" "
							ref={inputRef}
							onBlur={handleOnblurInput}
							onChange={handleOnChangeInput}
						/>
						<label
							htmlFor={`floating_filled${randomUUID}`}
							className="
							text-sm top-[0.9rem] peer-focus:-translate-y-[0.7rem] -translate-y-[0.7rem] 
							sm:text-base sm:top-[0.9rem] sm:peer-focus:-translate-y-[0.8rem] sm:-translate-y-[0.8rem]
							md:peer-focus:-translate-y-[0.8rem] md:-translate-y-[0.8rem]
							lg:text-xl lg:font-semibold lg:top-[1rem] lg:peer-focus:-translate-y-[1rem] lg:-translate-y-[1rem]
							xl:top-[0.9rem] xl:peer-focus:-translate-y-[0.9rem] xl:-translate-y-[0.9rem]
							left-4
							font-semibold absolute text-gray-500 dark:text-gray-400 duration-300 transform scale-75 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 cursor-text"
						>
							Địa chỉ email
						</label>
						<div ref={errorRef} className={`${style.error} `}>
							<FaRegCircleXmark />
							<p ref={mesErrorRef} className="text-sm font-semibold"></p>
						</div>
					</div>
					<Button
						htmlFor={"submit"}
						type={"primary"}
						size={"big"}
						onClick={handleButton}
						className=" flex gap-1 items-center justify-center
						mt-6
						lg:mt-0
						"
					>
						<span className="text-2xl font-bold ">Bắt đầu</span>
						<FaAngleRight fontSize={25} />
					</Button>
				</div>
			</form>
		</div>
	);
}

export default StartWithMail;
