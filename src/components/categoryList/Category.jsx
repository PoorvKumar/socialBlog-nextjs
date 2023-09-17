    import Image from 'next/image';
    import Link from 'next/link';
    import React from 'react';
    import styles from "./categoryList.module.css";

    const Category = ({ key, cat, imgsrc, style }) => {

        return (
            <Link key={key} href={`/blog?cat=` + cat} className={`${styles.category} ${style}`}>
                {imgsrc && <Image src={imgsrc} alt="" width={32} height={32} className={styles.image} />}
                {cat}
            </Link>
        )
    }

    export default Category;