import * as yup from "yup";

export const regsiterSchema = yup.object({
	username: yup.string().required("User Name is Required"),
	emailOrPhone: yup.string().required("Email or Phone is Required"),
	password: yup.string().min(3).required(),
});
