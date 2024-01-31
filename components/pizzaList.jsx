import React from 'react'
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';
import NameCard from './namingvideo';

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mr Deepak & Mrs Nanditha & Family</h1>
            <p className={styles.desc}>
                With great pleasure invites you to join us!
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList
