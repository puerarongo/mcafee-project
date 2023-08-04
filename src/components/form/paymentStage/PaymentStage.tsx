import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { Formik, Field } from "formik";
import { TextField } from "@mui/material";
import { Checkbox, FormControlLabel } from "@mui/material";
import IPaymentStage from "../../../helpers/interface/paymentStage.interface";
import paymentValidationSchema from "../../../helpers/paymentValidationSchema";
import textFieldCostumization from "../../../helpers/textFieldCostumization";
import PaypalStage from "../paypalStage/PaypalStage";
import styles from "./PaymentStage.module.css";

const PaymentStage: React.FC<IPaymentStage> = ({ setActiveForm, email }) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const cardNumberRef = useRef(null);
  const dateRef = useRef(null);
  const securityRef = useRef(null);

  // todo Func
  const tumblerHandler = () => setIsActive(true);
  const paypalHandler = () => setIsActive(false);
  const editHandler = () => setActiveForm(false);

  const handleCardNumber = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length > 16 || (e.key && !/^\d$/.test(e.key))) {
      e.preventDefault();
    }
  };

  const handleDate = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key && !/^\d$/.test(e.key)) e.preventDefault();
  };

  const handleInputDate = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 4) value = value.substr(0, 4);
    if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{2})/, "$1/$2");
    }
    e.target.value = value;
  };

  const handleSecurity = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key && !/^\d$/.test(e.key)) e.preventDefault();
  };

  const handleInputSecurity = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 3) value = value.substr(0, 3);
    e.target.value = value;
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
        <button
          className={isActive ? styles.tumbler__active : styles.tumbler}
          type="button"
          onClick={tumblerHandler}
        >
          Credit or debit card
        </button>
        <button
          className={!isActive ? styles.paypal__active : styles.tumbler}
          type="button"
          onClick={paypalHandler}
        >
          PayPal
        </button>
      </div>
      {isActive ? (
        <Formik
          initialValues={{
            cardNumber: "",
            firstName: "",
            lastName: "",
            date: "",
            securityCode: "",
            zip: "",
            toggle: false,
          }}
          validationSchema={paymentValidationSchema}
          onSubmit={(values) => {
            console.log("Form values", values);
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
                sx={
                  errors.cardNumber && touched.cardNumber
                    ? {
                        ...textFieldCostumization,
                        width: "555px",
                        border: "1px solid #e32224",
                      }
                    : touched.cardNumber
                    ? {
                        ...textFieldCostumization,
                        width: "555px",
                        border: "1px solid #007bff",
                      }
                    : {
                        ...textFieldCostumization,
                        width: "555px",
                        border: "1px solid #bdbdbd",
                      }
                }
                label="Card Number"
                name="cardNumber"
                value={values.cardNumber}
                variant="filled"
                autoComplete="off"
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 16,
                  onKeyPress: handleCardNumber,
                }}
                inputRef={cardNumberRef}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.cardNumber && touched.cardNumber ? (
                <p className={styles.validation__error}>{errors.cardNumber}</p>
              ) : (
                <span className={styles.default}></span>
              )}

              <div className={styles.name__container}>
                <div className={styles.field__container}>
                  <TextField
                    className={styles.input}
                    sx={
                      errors.firstName && touched.firstName
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
                          }
                        : touched.firstName
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #007bff",
                          }
                        : {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #bdbdbd",
                          }
                    }
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    autoComplete="off"
                    variant="filled"
                    inputProps={{ maxLength: 20 }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.firstName && touched.firstName ? (
                    <p className={styles.validation__error}>
                      {errors.firstName}
                    </p>
                  ) : (
                    <span className={styles.default}></span>
                  )}
                </div>

                <div className={styles.field__container}>
                  <TextField
                    className={styles.input}
                    sx={
                      errors.lastName && touched.lastName
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
                          }
                        : touched.lastName
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #007bff",
                          }
                        : {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #bdbdbd",
                          }
                    }
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    variant="filled"
                    autoComplete="off"
                    inputProps={{ maxLength: 20 }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.lastName && touched.lastName ? (
                    <p className={styles.validation__error}>
                      {errors.lastName}
                    </p>
                  ) : (
                    <span className={styles.default}></span>
                  )}
                </div>
              </div>

              <div className={styles.code__container}>
                <div className={styles.field__container}>
                  <TextField
                    className={styles.input}
                    sx={
                      errors.date && touched.date
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
                          }
                        : touched.date
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #007bff",
                          }
                        : {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #bdbdbd",
                          }
                    }
                    label="Expiry Date (MM/YY)"
                    name="date"
                    value={values.date}
                    variant="filled"
                    autoComplete="off"
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      maxLength: 5,
                      onKeyPress: handleDate,
                      onInput: handleInputDate,
                    }}
                    inputRef={dateRef}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.date && touched.date ? (
                    <p className={styles.validation__error}>{errors.date}</p>
                  ) : (
                    <span className={styles.default}></span>
                  )}
                </div>

                <div className={styles.field__container}>
                  <TextField
                    className={styles.input}
                    sx={
                      errors.securityCode && touched.securityCode
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
                          }
                        : touched.securityCode
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #007bff",
                          }
                        : {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #bdbdbd",
                          }
                    }
                    label="Security Code (CVV)"
                    type="password"
                    name="securityCode"
                    value={values.securityCode}
                    variant="filled"
                    autoComplete="off"
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      maxLength: 3,
                      onKeyPress: handleSecurity,
                      onInput: handleInputSecurity,
                    }}
                    inputRef={securityRef}
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
              </div>

              <div className={styles.name__container}>
                <div className={styles.field__container}>
                  <TextField
                    className={styles.input}
                    sx={
                      errors.zip && touched.zip
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
                          }
                        : touched.zip
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #007bff",
                          }
                        : {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #bdbdbd",
                          }
                    }
                    label="Billing Zip Code"
                    type="text"
                    name="zip"
                    value={values.zip}
                    variant="filled"
                    autoComplete="off"
                    inputProps={{ maxLength: 10 }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.zip && touched.zip ? (
                    <p className={styles.validation__error}>{errors.zip}</p>
                  ) : (
                    <span className={styles.default}></span>
                  )}
                </div>
              </div>

              <div className={styles.checkbox__container}>
                <Field name="toggle">
                  {({ field }: any) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value}
                          onChange={field.onChange}
                        />
                      }
                      label=""
                      sx={{
                        "&.Mui-checked": {
                          color: "#c01818",
                        },
                      }}
                    />
                  )}
                </Field>
                <p className={styles.checkbox__text}>
                  By clicking Place Order, I accept the License Agreement,
                  Auto-Renewal Policy and Privacy Notice.
                </p>
              </div>
              {errors.toggle ? (
                <p className={styles.validation__error}>{errors.toggle}</p>
              ) : (
                <span className={styles.default}></span>
              )}

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
      ) : (
        <PaypalStage />
      )}
    </div>
  );
};

export default PaymentStage;
