import React from "react";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import IPaymentStage from "../../../helpers/interface/paymentStage.interface";
import paymentValidationSchema from "../../../helpers/paymentValidationSchema";
import styles from "./PaymentStage.module.css";

const PaymentStage: React.FC<IPaymentStage> = ({ setActiveForm, email }) => {
  const editHandler = () => {
    setActiveForm(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title__container}>
        <h3 className={styles.title__email}>1. Email</h3>
        <p className={styles.email}>{email}</p>
        <button
          className={styles.edit__button}
          type="button"
          onClick={editHandler}
        >
          Edit
        </button>
      </div>
      <hr className={styles.line} />
      <div className={styles.title__container}>
        <h3 className={styles.title}>2. Payment</h3>
        <div className={styles.cards__container}>
          <span className={styles.infonote}>Installments option available</span>
        </div>
      </div>
      <div className={styles.buttons__container}>
        <button className={styles.button__tumbler} type="button">
          Credit or debit card
        </button>
        <button className={styles.button__tumbler} type="button">
          PayPal
        </button>
      </div>
      <Formik
        initialValues={{
          cardNumber: "",
          firstName: "",
          lastName: "",
          date: "",
          securityCode: "",
          zip: "",
        }}
        validationSchema={paymentValidationSchema}
        onSubmit={(values) => {
          const { cardNumber } = values;
          console.log("Email", cardNumber);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form className={styles.email__form} onSubmit={handleSubmit}>
            <TextField
              className={styles.input}
              sx={{
                width: "100%",
                border: "1px solid #000",
              }}
              label="Card Number"
              name="cardNumber"
              variant="filled"
              value={values.cardNumber}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.cardNumber && touched.cardNumber ? (
              <p className={styles.validation__error}>{errors.cardNumber}</p>
            ) : (
              <span className={styles.default}></span>
            )}

            <div className={styles.name__container}>
              <TextField
                className={styles.input}
                sx={{
                  width: "50%",
                  border: "1px solid #000",
                }}
                label="First Name"
                type="text"
                name="firstName"
                variant="filled"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.firstName && touched.firstName ? (
                <p className={styles.validation__error}>{errors.firstName}</p>
              ) : (
                <span className={styles.default}></span>
              )}

              <TextField
                className={styles.input}
                sx={{
                  width: "50%",
                  border: "1px solid #000",
                }}
                label="Last Name"
                type="text"
                name="lastName"
                variant="filled"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.lastName && touched.lastName ? (
                <p className={styles.validation__error}>{errors.lastName}</p>
              ) : (
                <span className={styles.default}></span>
              )}
            </div>

            <div className={styles.code__container}>
              <TextField
                className={styles.input}
                sx={{
                  width: "50%",
                  border: "1px solid #000",
                }}
                label="Expiry Date (MM/YY)"
                type="date"
                name="date"
                variant="filled"
                value={values.date}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.date && touched.date ? (
                <p className={styles.validation__error}>{errors.date}</p>
              ) : (
                <span className={styles.default}></span>
              )}

              <TextField
                className={styles.input}
                sx={{
                  width: "50%",
                  border: "1px solid #000",
                }}
                label="Security Code (CVV)"
                type="password"
                name="securityCode"
                variant="filled"
                value={values.securityCode}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.securityCode && touched.securityCode ? (
                <p className={styles.validation__error}>
                  {errors.securityCode}
                </p>
              ) : (
                <span className={styles.default}></span>
              )}
            </div>

            <div className={styles.name__container}>
              <TextField
                className={styles.input}
                sx={{
                  width: "50%",
                  border: "1px solid #000",
                }}
                label="Billing Zip Code"
                type="text"
                name="zip"
                variant="filled"
                value={values.zip}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.zip && touched.zip ? (
                <p className={styles.validation__error}>{errors.zip}</p>
              ) : (
                <span className={styles.default}></span>
              )}
            </div>

            <div className={styles.checkbox__container}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="checkbox"
              />
              <p className={styles.checkbox__text}>
                By clicking Place Order, I accept the License Agreement,
                Auto-Renewal Policy and Privacy Notice.
              </p>
            </div>

            <div className={styles.container__confirm}>
              <p className={styles.text__confirm}>
                This payment will be processed in the United States
              </p>
              <button
                className={styles.button__confirm}
                type="submit"
                onClick={() => {
                  touched.cardNumber = true;
                }}
              >
                Place Order
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentStage;
