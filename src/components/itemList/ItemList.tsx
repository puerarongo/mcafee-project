import React from "react";
import ICardItem from "../../helpers/interface/cardItem.interface";
import cardsPath from "../../helpers/cardsPath";
import styles from "./ItemList.module.css";

const ItemList: React.FC = () => {
  return (
    <ul className={styles.cards__container}>
      {cardsPath.map(({ card, title }: ICardItem, index: number) => {
        return (
          <li className={styles.cards__item} key={index + 1}>
            <img
              className={styles.card}
              src={card}
              alt={title + " card"}
              title={title}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
