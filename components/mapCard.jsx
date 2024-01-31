import React from "react";
import styles from "../styles/MapCard.module.css";
import Image from "next/image";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MapCard = () => {
  const openMaps = () => {
    const mapsLink = "https://maps.app.goo.gl/RYSJBz56u31m7Pqu5";
    window.open(mapsLink, "_blank");
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Venue: Ranganatha Swami betta,KB cross.</h1>
        <p>Join us at this wonderful location for a special celebration!</p>
        <div className={styles.containerbuttonnxt}>
          <Button
            className={styles.buttonnxt}
            variant="contained"
            color="primary"
            onClick={openMaps}
          >
            <LocationOnIcon />Locate on Map
          </Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/img/photo/maps.jpg" alt="Map" width={750} height={750} />
      </div>
    </div>
  );
};

export default MapCard;
