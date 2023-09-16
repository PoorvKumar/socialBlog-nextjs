import Image from 'next/image';
import React from 'react';
import styles from "./card.module.css";
import Link from 'next/link';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CODING</span>
                </div>
                <Link href="/">
                <h1 className={styles.heading}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi qui, velit repellendus labore, quod vero quia consequuntur voluptatum totam quis repudiandae laudantium ea earum corporis!</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card