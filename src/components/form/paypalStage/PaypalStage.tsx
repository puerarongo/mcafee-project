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
              <div className={errors.toggle ? styles.into__error : styles.into}>
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
                        color: "#c01818",
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
              {errors.toggle && (
                <p className={styles.chekbox__error}>{errors.toggle}</p>
              )}
            </div>
            <div className={styles.container__confirm}>
              <p className={styles.text__confirm}>
                This payment will be processed in the United States
              </p>
            </div>

            <div className={styles.order__container}>
              <div className={styles.container__price}>
                <h3 className={styles.total__subtitle}>Order total</h3>
                <p className={styles.total__price}>$54.99</p>
              </div>
              <button
                className={styles.button__paypal}
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

export default PaypalStage;
