import * as yup from "yup";

const paypalValidationSchema = yup.object().shape({
  toggle: yup
    .boolean()
    .oneOf(
      [true],
      "You'll need to check the box to accept offer terms and place your order."
    ),
});

export default paypalValidationSchema;
