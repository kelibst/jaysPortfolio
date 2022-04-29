import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Photox = (props: { url: string }) => {
  const { url } = props;
  return (
    <div className={styles.photoCont}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={url}
          alt="Photoshoot template"
          style={{
            borderRadius: "5px",
            maxWidth: "100%",
            padding: "0, 20px",
            display: "inline-block",
            cursor: "pointer",
          }}
          layout="fill"
        />
      </a>
    </div>
  );
};

export default Photox;
