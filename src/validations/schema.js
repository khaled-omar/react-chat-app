import * as yup from "yup";

export const forgetPasswordSchema = yup.object({
    email: yup.string().required().email().min(5),
}).required()