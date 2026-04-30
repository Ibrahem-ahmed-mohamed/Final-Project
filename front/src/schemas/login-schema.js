import * as yup from "yup";

export const loginschema=yup.object({
        emailOrPhone:yup.string().required("Email is Required"),
        password:yup.string().min(5).max(15).required("Password is Required")
})