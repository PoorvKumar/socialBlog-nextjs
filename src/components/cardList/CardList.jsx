import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from './Card';

const getData=async (page)=>
{
  const res=await fetch(`${process.env.NEXT_DEPLOY_URL}/api/posts?page=${page}`,{
    cache: "no-store",
  });

  if(!res.ok)
  {
    throw new Error("Failed");
  }

  return res.json();
}

const CardList = async ({page}) => {

  const data=await getData(page);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
        <Pagination/>
    </div>
  )
}

export default CardList