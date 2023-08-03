import React, { useState } from "react";
import EmailStage from "./emailStage/EmailStage";
import PaymentStage from "./paymentStage/PaymentStage";
import styles from "./Form.module.css";

const Form: React.FC = () => {
  const [activeForm, setActiveForm] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Great pick for online protection!</h1>
      {!activeForm ? (
        <EmailStage setActiveForm={setActiveForm} setEmail={setEmail} />
      ) : (
          <PaymentStage setActiveForm={setActiveForm} email={email} />
      )}
    </div>
  );
};

export default Form;
