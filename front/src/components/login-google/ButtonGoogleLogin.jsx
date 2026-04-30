import {  useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import userDataStore from "../../store";
export default function ButtonGoogleLogin() {
	const setUser=userDataStore((state)=>state.setUser);
	const signup = useGoogleLogin({
				onSuccess: async (creadentialResponse) => {
					const userInfo = await axios.get(
						"https://www.googleapis.com/oauth2/v3/userinfo",
						{headers:{Authorization:`Bearer ${creadentialResponse.access_token}`}}
					)
					setUser(userInfo.data)
					console.log(userInfo.data);
					console.log("okkkkkkkkkk");
				},
				onError:() => console.log("login")
	})
	return (
		<div>
			<button onClick={()=>{signup()}} className="flex gap-4 items-center border w-full rounded-sm py-4 justify-center border-[#00000066] ">
			<FcGoogle  className="text-2xl"/>
			<p>Sign up with Google</p>
			</button>
		</div>
	);
}
