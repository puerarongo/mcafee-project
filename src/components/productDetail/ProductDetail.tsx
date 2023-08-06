import React from "react";
import ProductArticle from "./productArticle/ProductArticle";
import IconsList from "../iconsList/IconsList";
import styles from "./ProductDetail.module.css";

const ProductDetail: React.FC = () => {
  return (
    <div className={styles.container}>
      <ProductArticle />
      <IconsList />
    </div>
  );
};

export default ProductDetail;
