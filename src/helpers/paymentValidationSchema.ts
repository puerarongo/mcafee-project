import * as yup from "yup";

const paymentValidationSchema = yup.object().shape({
  cardNumber: yup
    .number()
    .min(16, "This card is not valid. Double-check and try again.")
    .max(18, "This card is not valid. Double-check and try again.")
    .required("Please enter the credit card number."),
  firstName: yup.string().required("We need your First name."),
  lastName: yup.string().required("We need your First name."),
  date: yup.string().required("We need credit card's expiry date."),
  securityCode: yup
    .number()
    .min(3, "Please enter a valid security code.")
    .max(3, "Please enter a valid security code.")
    .required("Enter the CVV."),
  zip: yup
    .string()
    .max(10, "Make sure you enter the right ZIP.")
    .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, "Make sure you enter the right ZIP.")
    .required("Please enter the zip code."),
});

export default paymentValidationSchema;
