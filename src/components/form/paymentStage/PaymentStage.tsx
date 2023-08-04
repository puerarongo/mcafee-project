import React, { useState } from "react";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import IPaymentStage from "../../../helpers/interface/paymentStage.interface";
import paymentValidationSchema from "../../../helpers/paymentValidationSchema";
import textFieldCostumization from "../../../helpers/textFieldCostumization";
import styles from "./PaymentStage.module.css";

const PaymentStage: React.FC<IPaymentStage> = ({ setActiveForm, email }) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const tumblerHandler = () => setIsActive(true);
  const paypalHandler = () => setIsActive(false);

  const editHandler = () => {
    setActiveForm(false);
  };

  console.log(isActive);

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
                sx={
                  errors.cardNumber && touched.cardNumber
                    ? {
                        ...textFieldCostumization,
                        width: "555px",
                        border: "1px solid #e32224",
                      }
                    : {
                        ...textFieldCostumization,
                        width: "555px",
                        border: "1px solid #bdbdbd",
                      }
                }
                label="Card Number"
                name="cardNumber"
                type="number"
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
                <div className={styles.field__container}>
                  <TextField
                    sx={
                      errors.firstName && touched.firstName
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
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
                    variant="filled"
                    value={values.firstName}
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
                    sx={
                      errors.lastName && touched.lastName
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
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
                    variant="filled"
                    value={values.lastName}
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
                    sx={
                      errors.date && touched.date
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
                          }
                        : {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #bdbdbd",
                          }
                    }
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
                </div>

                <div className={styles.field__container}>
                  <TextField
                    sx={
                      errors.securityCode && touched.securityCode
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
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
              </div>

              <div className={styles.name__container}>
                <div className={styles.field__container}>
                  <TextField
                    sx={
                      errors.zip && touched.zip
                        ? {
                            ...textFieldCostumization,
                            width: "242px",
                            border: "1px solid #e32224",
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
      ) : (
        <div>some</div>
      )}
    </div>
  );
};

export default PaymentStage;
