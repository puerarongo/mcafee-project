import React from "react";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import ProductDetail from "../components/productDetail/ProductDetail";
import styles from "./FormPage.module.css";

const FormPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main__container}>
        <Form />
        <ProductDetail />
      </main>
    </>
  );
};

export default FormPage;
