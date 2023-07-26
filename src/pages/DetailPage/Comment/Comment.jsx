import Button from "../../../components/Button/Button";
import backgroundBanner from "../../../assets/imgBackground/VN_vi_website_large.jpg";
import BackgroundImg from "../../../components/BackgroundImg/BackgroundImg";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommentMID, postCommentMID } from "../../../redux/slices/commentSlice";
import { useEffect, useRef } from "react";
import moment from "moment";

function Comment() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCommentMID());
	}, []);
	const { listComment } = useSelector((state) => state.commentSlice);
	const { numAvatar, userLogin } = useSelector((state) => state.userSlices);
	const commentRef = useRef("");

	const renderComment = () => {
		return listComment?.map((item, i) => {
			const renderAvatar = () => {
				// console.log(item.avatar);

				// nếu là người dùng đang đăng nhập
				if (item.name === userLogin.hoTen) return `https://i.pravatar.cc/150?img=${numAvatar}`;

				// nếu có đường dẫn cụ thể
				if (item.avatar.length > 5) return item.avatar;

				// còn lại
				return `https://i.pravatar.cc/150?img=${item.avatar}`;
			};

			return (
				<article key={i} className="p-6 text-base bg-white rounded-lg dark:bg-[rgb(55,65,81)]">
					<footer className="flex justify-between items-center mb-2">
						<div className="flex items-center">
							<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
								<img className="mr-2 w-6 h-6 rounded-full" src={`${renderAvatar()}`} />
								<span>{item.name}</span>
							</p>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								<time dateTime="2022-02-08" title="February 8th, 2022">
									{moment(item.createdAt).format("DD/MM/YYYY HH:mm:ss")}
								</time>
							</p>
						</div>
					</footer>
					<p className="text-gray-500 dark:text-gray-400">{item.comment}</p>
				</article>
			);
		});
	};

	const handlePost = () => {
		const value = commentRef.current.value.trim();
		if (value === "") return;
		const data = {
			createdAt: `${new Date(Date.now())}`,
			comment: `${value}`,
			name: `${userLogin.hoTen}`,
			avatar: `${numAvatar}`,
		};
		console.log(data);

		dispatch(postCommentMID(data)).then((result) => {
			if (result?.mes) result?.type(result?.mes);
		});

		commentRef.current.value = "";
	};
	return (
		<section className="py-24 relative">
			{/* BACKGROUND IMG */}
			<BackgroundImg img={backgroundBanner} filter />
			<div className="container relative">
				<div className=" mx-auto px-4 py-5 ">
					{/* TITLE */}
					<div className="flex justify-start items-center mb-6">
						<h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Bình luận (20)</h2>
					</div>

					{/* LIST COMMENT */}
					<div className="space-y-6 max-h-[500px] pr-2 overflow-y-auto ">{renderComment()}</div>

					<hr className="my-6 border-gray-700" />

					{/* POST COMMENT */}
					<form className="">
						<div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
							<label htmlFor="comment" className="sr-only">
								Your comment
							</label>
							<textarea
								id="comment"
								ref={commentRef}
								rows={6}
								className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
								placeholder="Viết bình luận..."
								required
								defaultValue={""}
							/>
						</div>
						<Button onClick={handlePost} htmlFor="button" type={"primary"} size={"small"}>
							<span className="text-base font-semibold ">Đăng bình luận</span>
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
export default Comment;
