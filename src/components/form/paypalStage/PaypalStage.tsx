import React from "react";
import { Formik, Field } from "formik";
import { Checkbox, FormControlLabel } from "@mui/material";
import paypalValidationSchema from "../../../helpers/paypalValidationSchema";
import svgPath from "../../../helpers/svgPath";
import styles from "./PaypalStage.module.css";

const PaypalStage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexcard}>
        <div className={styles.img__container}>
          <img src={svgPath.flexcard} alt="flexcard" loading="lazy" />
        </div>
        <div className={styles.text__container}>
          <p className={styles.flexcard__text}>
            After clicking "PayPal", you will be redirected to PayPal to
            complete your purchase securely.
          </p>
        </div>
      </div>
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
        validationSchema={paypalValidationSchema}
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
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PaypalStage;
