import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import { regsiterSchema } from "../../schemas/signup-schema";
import axios from "axios";
import Loginforms from "./Loginforms";
import ButtonGoogleLogin from "../login-google/ButtonGoogleLogin";
import userDataStore from "../../store";
import toast, { Toaster } from "react-hot-toast";

export default function Signupforms() {
	let navigate = useNavigate();

	const setUser = userDataStore((state) => state.setUser);
	async function handelregister(values) {
		const isEmail = values.emailOrPhone.includes("@");
		try {
			const res = await axios.post(
				"http://localhost:1337/api/auth/local/register",
				{
					username: values.username,
					email:
						isEmail ? values.emailOrPhone : `${values.emailOrPhone}@phone.com`,
					password: values.password,
				},
			);
			localStorage.setItem("token:", res.data.jwt);

			console.log("res:", res.data);

			if (!isEmail) {
				const phoneRes = await axios.put(
					`http://localhost:1337/api/users/${res.data.user.id}`,
					{
						phone: values.emailOrPhone,
					},
					{
						headers: { Authorization: `Bearer ${res.data.jwt}` },
					},
				);
				console.log("resphone:", phoneRes.data);

				setUser(phoneRes.data);
			} else {
				setUser(res.data.user);
			}
			toast.success("Account created successfully! 🎉");
			console.log("store:", userDataStore.getState().user);
			localStorage.setItem("token:", res.data.jwt);
			setTimeout(() => {
				navigate("/");
			}, 5000);
		} catch (err) {
			toast.error("Account isn't created!");
			console.log(err);
		}
	}
	return (
		<div className="mt-15 bg-white flex w-full">
			<div>
				<Toaster position="top-center" />
			</div>
			{/* side image */}
			<div className="w-[45%] sm:hidden xl:block ">
				<img className="w-full" src="../../../public/Side Image.png" alt="" />
			</div>
			{/* form */}
			<div className="xl:w-[55%] sm:w-full flex  justify-center flex-col items-center">
				<div className="gap-12 xl:w-[55%] 2xl:w-[33%] sm:w-[53%] flex flex-col">
					<div>
						<h2 className="font-medium text-4xl mb-6 letter">
							Creat an account
						</h2>
						<p>Enter your details below</p>
					</div>
					<div>
						<Formik
							className="max-w-md mx-auto"
							validationSchema={regsiterSchema}
							initialValues={{ username: "", emailOrPhone: "", password: "" }}
							onSubmit={(values) => {
								handelregister(values);
							}}
						>
							<Form className="gap-10 flex flex-col">
								{/* fields */}
								<div className="relative z-0 w-full  group">
									{/* name field */}
									<Field
										type="text"
										name="username"
										id="floating_email"
										className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-gray-400 border-b-2  border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
										placeholder=" "
										required
									/>
									<label
										htmlFor="floating_email"
										className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 text-gray-400 origin-left peer-focus:inset-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
									>
										Name
									</label>
									<ErrorMessage
										component="div"
										name="username"
										className="text-red-500"
									/>
								</div>
								<div className="relative z-0 w-full  group">
									{/* email field */}
									<Field
										type="text"
										name="emailOrPhone"
										id="floating_password"
										className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-gray-400 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
										placeholder=" "
										required
									/>
									<label
										htmlFor="floating_password"
										className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 text-gray-400 origin-left peer-focus:inset-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
									>
										Email or Phone Number
									</label>
									<ErrorMessage
										component="div"
										name="emailOrPhone"
										className="text-red-500"
									/>
								</div>
								<div className="relative z-0 w-full  group">
									{/* password field */}
									<Field
										type="password"
										name="password"
										id="floating_repeat_password"
										className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-gray-400 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
										placeholder=" "
										required
									/>
									<label
										htmlFor="floating_repeat_password"
										className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 text-gray-400 origin-left peer-focus:inset-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
									>
										password
									</label>
									<ErrorMessage
										component="div"
										name="password"
										className="text-red-500"
									/>
								</div>
								<div>
									<button
										type="submit"
										className="text-white bgred w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-sm text-sm px-4 py-4 focus:outline-none"
									>
										Creat Account
									</button>
								</div>
								{/* sign up with google */}
								<div>
									<ButtonGoogleLogin />
								</div>
								{/* have account */}
								<div className="flex gap-4 justify-center">
									<p>Already have account?</p>
									<Link
										to={"/login"}
										className="border-b-2 items-center border-[#99a1af]"
									>
										Log in
									</Link>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
}
