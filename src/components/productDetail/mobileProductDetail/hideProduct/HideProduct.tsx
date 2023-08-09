import React from "react";
import IShowProduct from "../../../../helpers/interface/showProduct.interface";
import buttonsStyles from "../showProduct/ShowProduct.module.css";
import svgPath from "../../../../helpers/svgPath";
import IconsList from "../../../iconsList/IconsList";
import styles from "./HideProduct.module.css";

const HideProduct: React.FC<IShowProduct> = ({ setShow }) => {
  const price = 54.99;
  const clickHandler = () => setShow(false);

  return (
    <div className={styles.container}>
      <div className={styles.content__container}>
        <div className={styles.buttons__container}>
          <p className={buttonsStyles.subtitle}>Your Order - 1 Item</p>
          <button
            className={buttonsStyles.show__button}
            type="button"
            onClick={clickHandler}
          >
            <p className={buttonsStyles.button__text}>Hide</p>
            <div className={styles.svg__container}>
              <svg className={styles.svg__arrow}>
                <use href={svgPath.smallArrow + "#arrow"}></use>
              </svg>
            </div>
          </button>
        </div>
        <div className={styles.title__container}>
          <div className={styles.name__container}>
            <h3 className={styles.product__name}>
              McAfee+™ Premium - Individual
            </h3>
            <p>Unlimited Devices</p>
            <p>1 year subscription</p>
          </div>
          <div className={styles.quotes__container}>
            <h3 className={styles.product__price}>${price}</h3>
            <p className={styles.product__tax}>Only $4.58</p>
            <p className={styles.product__permonth}>per month</p>
          </div>
        </div>

        <div className={styles.article__container}>
          <h3 className={styles.article__title}>Product and Offer Details</h3>
          <p className={styles.article__text}>
            You are purchasing a one year subscription. It will be automatically
            renewed and you will be charged 30 days before the subscription ends
            and annually thereafter at the renewal price (currently $149.99/yr).
            We will remind you 30 days before you are charged. You can turn off
            auto-renewal at any time from the My Account page . For more details
            on auto-renewal, see here and the full offer details here.
          </p>
        </div>
        <div className={styles.price__container}>
          <div className={styles.subtitles__container}>
            <p>Sub-total</p>
            <p className={styles.tax}>Tax</p>
          </div>
          <div className={styles.sum__container}>
            <p>${price}</p>
            <p className={styles.tax}>Not yet included</p>
          </div>
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <IconsList />
        </div>
      </div>
    </div>
  );
};

export default HideProduct;
