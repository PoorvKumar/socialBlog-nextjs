import Image from 'next/image';
import React from 'react';
import styles from "./card.module.css";
import Link from 'next/link';

const Card = ({ key, item }) => {

    return (
        <div className={styles.container} key={key}>
            {item.img &&
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt={item.slug} fill className={styles.image} />
                </div>
            }
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item.createdAt.substring(0, 10)} - </span>
                    <span className={styles.category}>{item.catSlug.toUpperCase()}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1 className={styles.heading}>{item.title}</h1>
                </Link>
                <p id={item._id} className={styles.desc}>{item.shortDesc+"..."}</p> 
                <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card;