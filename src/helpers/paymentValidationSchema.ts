import * as yup from "yup";

const paymentValidationSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .min(16, "This card is not valid. Double-check and try again.")
    .max(16, "This card is not valid. Double-check and try again.")
    .required("Please enter the credit card number."),
  firstName: yup.string().required("We need your First name."),
  lastName: yup.string().required("We need your First name."),
  date: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/(2[3-9]|[3-9][0-9])$/,
      "It looks like this expiry date doesn't match your credit card."
    )
    .required("We need credit card's expiry date."),
  securityCode: yup
    .string()
    .min(3, "Please enter a valid security code.")
    .max(3, "Please enter a valid security code.")
    .required("Enter the CVV."),
  zip: yup
    .string()
    .max(10, "Make sure you enter the right ZIP.")
    .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, "Make sure you enter the right ZIP.")
    .required("Please enter the zip code."),
  toggle: yup
    .boolean()
    .oneOf(
      [true],
      "You'll need to check the box to accept offer terms and place your order."
    ),
  state: yup
    .string()
    .required("Please enter your state.")
    .oneOf(["Arizona", "Alaska", "Arkansas"], "Please enter your state."),
});

export default paymentValidationSchema;
