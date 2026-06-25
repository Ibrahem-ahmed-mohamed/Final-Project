import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [status, setStatus] = useState({ type: "", message: "" });
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setStatus({ type: "", message: "" });

		if (!formData.name || !formData.email || !formData.message) {
			setStatus({
				type: "error",
				message: "❌ Please fill in all the required fields.",
			});
			setIsLoading(false);
			return;
		}

		try {
			const response = await axios.post("http://localhost:1337/api/contacts", {
				data: {
					name: formData.name,
					email: formData.email,
					phone: formData.phone || "",
					message: formData.message,
				},
			});

			console.log("sent ✅:", response.data);
			setStatus({
				type: "success",
				message: "thank you for contacting us we will get back to you soon ✅ ",
			});
			setFormData({ name: "", email: "", phone: "", message: "" });
		} catch (error) {
			console.error("error:", error);
			setStatus({
				type: "error",
				message: "An error occurred. Please try again. ❌",
			});
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="">
			<div className="flex gap-3 mb-20">
				<Link to={"/"} className="texgray">
					Home
				</Link>
				<span className="texgray">/</span>
				<Link to={"/ContactPage"}>Contact</Link>
			</div>
			{/* Breadcrumb */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div className="lg:col-span-1 px-8.75 pt-10 pb-12.75 shadow-md space-y-6">
					<div>
						<div className="flex items-center gap-3 mb-4">
							<div className="bg-[#DB4444] text-white p-2.25 rounded-full">
								<FiPhone className="text-2xl" />
							</div>
							<h3 className="text-lg font-semibold">Call To Us</h3>
						</div>
						<p className=" text-sm mb-2">
							We are available 24/7, 7 days a week.
						</p>
						<p className=" font-medium">Phone: +8801611112222</p>
					</div>
					<hr />
					{/* Write To Us */}
					<div>
						<div className="flex items-center gap-3 mb-4">
							<div className="bg-[#DB4444] text-white p-2.25 rounded-full">
								<MdOutlineEmail className="text-2xl" />
							</div>
							<h3 className="text-lg font-semibold">Write To Us</h3>
						</div>
						<p className=" text-sm mb-4">
							Fill out our form and we will contact you within 24 hours.
						</p>
						<p className=" text-sm mb-4">Emails: customer@exclusive.com</p>
						<p className=" text-sm">Emails: support@exclusive.com</p>
					</div>
				</div>

				<div className="lg:col-span-2 b p-8 shadow-md">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<input
								type="text"
								name="name"
								placeholder="Your Name *"
								value={formData.name}
								onChange={handleChange}
								className=" bg-[#F5F5F5] px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Your Email"
								value={formData.email}
								onChange={handleChange}
								className=" bg-[#F5F5F5] px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
								required
							/>
							<input
								type="tel"
								name="phone"
								placeholder="Your Phone *"
								value={formData.phone}
								onChange={handleChange}
								className=" bg-[#F5F5F5] px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
							/>
						</div>

						<textarea
							name="message"
							placeholder="Your Message *"
							rows="6"
							value={formData.message}
							onChange={handleChange}
							className=" bg-[#F5F5F5] px-4 py-6 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
							required
						></textarea>

						{status.message && (
							<div
								className={`p-3 rounded ${
									status.type === "success" ?
										"bg-green-100 text-green-700"
									:	"bg-red-100 text-[#DB4444]"
								}`}
							>
								{status.message}
							</div>
						)}

						<div className="flex justify-end">
							<button
								type="submit"
								disabled={isLoading}
								className={`bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-[#DB4444] transition ${
									isLoading ? "opacity-70 cursor-not-allowed" : ""
								}`}
							>
								{isLoading ? "sending..." : "Send Message"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
