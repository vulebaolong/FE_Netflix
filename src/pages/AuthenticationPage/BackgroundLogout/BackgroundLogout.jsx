function BackgroundLogout() {
	return (
		<div
			className="absolute w-full min-h-screen block h-full bg-black -z-10"
			style={{
				backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
				backgroundImage: "url(https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg)",
			}}
		></div>
	);
}
export default BackgroundLogout;
