import React from "react";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import IEmailStage from "../../../helpers/interface/emailStage.interface";
import emailValidationSchema from "../../../helpers/emailValidationSchema";
import styles from "./EmailStage.module.css";

const EmailStage: React.FC<IEmailStage> = ({ setActiveForm, setEmail }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>1. Email</h3>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={emailValidationSchema}
        onSubmit={(values) => {
          const { email } = values;
          setEmail(email);
          setActiveForm(true);
          console.log("Email", email);
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
                height: "22px",
                border: "1px solid #000",
                padding: "6px 12px 6px 16px",
              }}
              label="Email"
              name="email"
              type="email"
              variant="filled"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className={styles.validation__error}>{errors.email}</p>
            ) : (
              <span className={styles.default}></span>
            )}
            <div className={styles.container__confirm}>
              <p className={styles.text__confirm}>
                We'll email your purchase receipt to this address, and provide
                links so you can access McAfee on other devices.
              </p>
              <button
                className={styles.button__confirm}
                type="submit"
                onClick={() => {
                  touched.email = true;
                }}
              >
                Continue
              </button>
            </div>
          </form>
        )}
      </Formik>

      <hr className={styles.line} />
      <div className={styles.container__disable}>
        <h3 className={styles.title}>2. Payment</h3>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default EmailStage;
