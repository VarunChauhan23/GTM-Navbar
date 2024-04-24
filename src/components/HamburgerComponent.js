import React from 'react';
import styles from './Hamburger.module.css';

const HamburgerComponent = () => {
    return (
        <>
            <div className={styles["hamburger"]}>
                <div className={styles["burger"]}></div>
                <div className={styles["burger"]}></div>
                <div className={styles["burger"]}></div>
            </div>
        </>
    )
}

export default HamburgerComponent