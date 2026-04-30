import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import { loginschema } from "../../schemas/login-schema";
import toast, { Toaster } from "react-hot-toast";

export default function Loginforms() {
	let navigate = useNavigate();
	async function handellogin(values) {
		const isEmail = values.emailOrPhone.includes("@");
		try {
			const res = await axios.post("http://localhost:1337/api/auth/local", {
				identifier:
					isEmail ? values.emailOrPhone : `${values.emailOrPhone}@phone.com`,
				phone: isEmail ? "" : values.emailOrPhone,
				password: values.password,
			});
			console.log(res);
			toast.success("Account created successfully! 🎉");
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
							Log in to Exclusive
						</h2>
						<p>Enter your details below</p>
					</div>
					<div>
						<Formik
							className="max-w-md mx-auto"
							validationSchema={loginschema}
							initialValues={{ emailOrPhone: "", password: "" }}
							onSubmit={(values) => {
								handellogin(values);
							}}
						>
							<Form className="gap-10 flex flex-col">
								<div className="relative z-0 w-full  group">
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
									<ErrorMessage component="div" name="emailOrPhone" />
								</div>
								<div className="relative z-0 w-full  group">
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
									<ErrorMessage component="div" name="password" />
								</div>
								<div className="w-full flex justify-between items-center">
									<button
										type="submit"
										className="text-white cursor-pointer bgred sm:w-50 md:w-70 lg:w-80 xl:w-30  box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-sm text-sm px-4 py-4  focus:outline-none"
									>
										Login
									</button>
									<Link className="texred cursor-pointer">
										Forget Password?
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
