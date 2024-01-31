import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          Join us for the joyous Naming Ceremony of our baby! Your presence is warmly requested to celebrate this special occasion with our family.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FOR ORDERS 👨‍💻 CONTACT:</h1>
          <Link href={"https://wa.me/+918105114625"} className={styles.text1}>
          <span className={styles.whatsapp}><i className="fa fa-whatsapp"></i></span> WHATSAPP US
            <br /> YOUR, REQUIREMENT
            <br /> +91 8105114625
          </Link>
          <p className={styles.text}>
            2356 C. CDEVOPS #20.
            <br /> Karnataka, 572215
            <br /> 📱💬(+91) 8105114625
          </p>
          <p className={styles.text}>
            1614 E. CDEVOPS #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
        </div>
        <div className={styles.carding}>
          <h1 className={styles.titlel}>COPYRIGHT © 2024- C-DEVOPS!</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
