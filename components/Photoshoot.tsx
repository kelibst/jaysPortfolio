import React from "react";
import styles from "../styles/Home.module.css";
import Photox from "./Photox";

const Photoshoot = (props: {
  details: {
    name: string;
    images: string[];
    id: string;
  };
}) => {
  const { name, images, id } = props.details;
  return (
    <div className={styles.artsCont} id={id}>
      <h4 className={styles.photoName}>{name}</h4>
      <div className={styles.arts}>
        {images.map((url: string) => {
          return <Photox url={`/images${url}`} key={url} />;
        })}
      </div>
    </div>
  );
};

export default Photoshoot;
