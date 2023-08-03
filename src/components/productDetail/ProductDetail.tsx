import React from "react";
import ProductArticle from "./productArticle/ProductArticle";
import styles from "./ProductDetail.module.css";

const ProductDetail: React.FC = () => {
  return (
    <div className={styles.container}>
      <ProductArticle />
    </div>
  );
};

export default ProductDetail;
