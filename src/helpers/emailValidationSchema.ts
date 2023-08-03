import * as yup from "yup";

const emailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .typeError("Will be a string")
    .email("Please enter a valid email address.")
    .required("Please enter a valid email address."),
});

export default emailValidationSchema;
