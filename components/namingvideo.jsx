import React from "react";
import styles from "../styles/NameCard.module.css";
import Image from "next/image";

const NameCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Celebrating the joyous arrival of your little one!</p>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/img/photo/mainvio.gif" alt="Baby" layout="fill" />
      </div>
    </div>
  );
};

export default NameCard;
