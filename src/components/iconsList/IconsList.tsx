import React from "react";
import IIconItem from "../../helpers/interface/iconItem.interface";
import iconsPath from "../../helpers/iconsPath";
import styles from "./IconsList.module.css";

const IconsList: React.FC = () => {
  return (
    <ul className={styles.icons__container}>
      {iconsPath.map(
        (
          { icon, id, description1, description2 }: IIconItem,
          index: number
        ) => {
          return (
            <li className={styles.icons__item} key={index + 1}>
              <svg className={styles.svg__icon}>
                <use href={icon + id}></use>
              </svg>
              <div className={styles.text__container}>
                <p className={styles.icon__text}>{description1}</p>
                <p className={styles.icon__text}>{description2}</p>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default IconsList;
