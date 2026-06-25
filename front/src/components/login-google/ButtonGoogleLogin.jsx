import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import userDataStore from "../../store";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

export default function ButtonGoogleLogin() {
	let navigate = useNavigate();
	const setUser = userDataStore((state) => state.setUser);
	const signup = useGoogleLogin({
		onSuccess: async (creadentialResponse) => {
			const userInfo = await axios.get(
				"https://www.googleapis.com/oauth2/v3/userinfo",
				{
					headers: {
						Authorization: `Bearer ${creadentialResponse.access_token}`,
					},
				},
			);
			setUser(userInfo.data);
			console.log(userInfo.data);
			console.log(creadentialResponse);
			console.log("okkkkkkkkkk");
			toast.success("Account created successfully! 🎉");
			localStorage.setItem("token:", creadentialResponse.access_token);
			setTimeout(() => {
				navigate("/");
			}, 5000);
		},
		onError: () => console.log("login"),
	});
	return (
		<div>
			<div>
				<Toaster position="top-center" />
			</div>
			<button
				onClick={() => {
					signup();
				}}
				className="flex gap-4 items-center border w-full rounded-sm py-4 justify-center border-[#00000066] "
			>
				<FcGoogle className="text-2xl" />
				<p>Sign up with Google</p>
			</button>
		</div>
	);
}
