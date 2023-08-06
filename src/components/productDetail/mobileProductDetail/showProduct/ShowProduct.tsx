import React from "react";
import IShowProduct from "../../../../helpers/interface/showProduct.interface";
import styles from "./ShowProduct.module.css";

const ShowProduct: React.FC<IShowProduct> = ({ setShow }) => {
  const clickHandler = () => setShow(true);

  return (
    <div className={styles.container}>
      <div className={styles.buttons__container}>
        <p className={styles.subtitle}>Your Order - 1 Item</p>
        <button
          className={styles.show__button}
          type="button"
          onClick={clickHandler}
        >
          <p className={styles.button__text}>Show</p>
          <i className={styles.icon}></i>
        </button>
      </div>
      <div className={styles.main__container}>
        <h3 className={styles.product__name}>
          McAfee+™ Premium - Individual Unlimited Devices
        </h3>
        <p className={styles.product__text}>Unlimited Devices</p>
        <p className={styles.product__text}>1 year subscription</p>
      </div>
    </div>
  );
};

export default ShowProduct;
