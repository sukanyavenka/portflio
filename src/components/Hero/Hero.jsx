import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero =() => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi
            </h1>
            <p className={styles.description}>
                xxxxx
            </p>
            <a href="mailto:sukanya.s1793@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroimage.png")} alt="about me" className={styles.heroImg }/>
        <div className={styles.topBlur} />
        <div  className={styles.bottomBlur}/>

        
    </section>;
};