"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "./menuPosts.module.css";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();
  // console.log(data);

  if (!res.ok) {
      const error = new Error(data.message);
      throw error;
  }

  return data;
}

const MenuPosts = ({withImage}) => {

  const { data, isLoading } = useSWR(`/api/popular`, fetcher);
  // console.log(data);

  // console.log(styles);

  const mapping={
    "travel": styles.travel,
    "culture": styles.culture,
    "food": styles.food,
    "fashion": styles.fashion,
    "coding": styles.coding,
    "style": styles.style
  };

  return (
    <div className={styles.items}>
        {data?.map((item)=> (
          <Link href={"/"} className={styles.item} key={item._id}>
          {withImage && <div className={styles.imageContainer}>
            <Image src={item.user.image} alt="" fill className={styles.image}/>
          </div>}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${mapping[item.catSlug]}`}>{item.catSlug}</span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item.user.name}</span>
              <span className={styles.date}> - {item.createdAt.substring(0,10)}</span>
            </div>
          </div>
        </Link>
        ))}
      </div>
  );
}

export default MenuPosts