import React from "react";
import Media from "react-media";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import ProductDetail from "../components/productDetail/ProductDetail";
import MobileProductDetail from "../components/productDetail/mobileProductDetail/MobileProductDetail";
import styles from "./FormPage.module.css";

const FormPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main__container}>
        <Media
          queries={{
            small: "(max-width: 768px)",
          }}
        >
          {(matches) => (
            <>
              {matches.small ? (
                <>
                  <MobileProductDetail />
                  <Form />
                </>
              ) : (
                <>
                  <Form />
                  <ProductDetail />
                </>
              )}
            </>
          )}
        </Media>
      </main>
    </>
  );
};

export default FormPage;
