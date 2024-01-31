import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/photo/doll.png" alt="Baby" width="250" height="250" />
      <h1 className={styles.title}>Baby Naming Ceremony</h1>
      <span className={styles.price}>
        Join us in celebrating the arrival of our..
      </span>
      <p className={styles.desc}>little one</p>
      <p className={styles.invitationtext}>
        You are cordially invited to the baby naming ceremony of our beloved
        Baby.
      </p>
      <p className={styles.invitationdetails}>
        Date: 11-02-2024
        <br />
        Time: 10AM
        <br />
        Venue: Ranganatha Swami betta,KB cross, Turuvekere, Tumkur
      </p>
    </div>
  );
};

export default PizzaCard;
