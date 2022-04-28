import React from "react";
import styles from "../styles/Home.module.css";
import Photox from "./Photox";

const Photoshoot = (props) => {
  const { name, images } = props.details;
  return (
    <div className={styles.artsCont}>
      <h4 className={styles.photoName}>{name}</h4>
      <div className={styles.arts}>
        {images.map((url: String) => {
          return <Photox url={`/images/banners/${url}`} key={url} />;
        })}
      </div>
    </div>
  );
};

export default Photoshoot;
