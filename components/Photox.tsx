import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Photox = (props) => {
  const { url } = props;
  return (
    <div className={styles.photoCont}>
      <Image
        src={url}
        alt="Photoshoot template"
        style={{
          borderRadius: "5px",
          maxWidth: "100%",
          padding: "0, 20px",
          display: "inline-block",
        }}
        layout="fill"
      />
    </div>
  );
};

export default Photox;
