import React from "react";
import Media from "react-media";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import IEmailStage from "../../../helpers/interface/emailStage.interface";
import svgPath from "../../../helpers/svgPath";
import emailValidationSchema from "../../../helpers/emailValidationSchema";
import textFieldCostumization from "../../../helpers/textFieldCostumization";
import ItemList from "../../itemList/ItemList";
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
              sx={
                errors.email && touched.email
                  ? {
                      ...textFieldCostumization,
                      border: "1px solid #e32224",
                    }
                  : touched.email
                  ? {
                      ...textFieldCostumization,
                      border: "1px solid #007bff",
                    }
                  : {
                      ...textFieldCostumization,
                      border: "1px solid #bdbdbd",
                    }
              }
              label="Email"
              name="email"
              type="email"
              value={values.email}
              variant="filled"
              autoComplete="off"
              inputProps={{ maxLength: 49 }}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className={styles.validation__error}>{errors.email}</p>
            ) : (
              <span className={styles.default}></span>
            )}
            <div className={styles.container__confirm}>
              <Media queries={{ small: "(max-width: 768px)" }}>
                {(matches) => (
                  <>
                    {matches.small ? (
                      <p className={styles.text__confirm}>
                        Email address is required for order notification and
                        receipt.
                      </p>
                    ) : (
                      <p
                        className={styles.text__confirm}
                        style={{ width: "58.3%" }}
                      >
                        We'll email your purchase receipt to this address, and
                        provide links so you can access McAfee on other devices.
                      </p>
                    )}
                  </>
                )}
              </Media>
              <div className={styles.button__container}>
                <button
                  className={styles.button__confirm}
                  type="submit"
                  onClick={() => {
                    touched.email = true;
                  }}
                >
                  <span style={{ opacity: "87%" }}>Continue</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>

      <div className={styles.line}></div>
      <div className={styles.container__disable}>
        <div className={styles.lock__container}>
          <h3 className={styles.title}>2. Payment</h3>
          <img className={styles.lock} src={svgPath.lock} alt="grey lock" />
        </div>
        <ItemList />
        <div>
          <svg className={styles.arrow}>
            <use href={svgPath.arrow + "#arrow"}></use>
          </svg>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default EmailStage;
