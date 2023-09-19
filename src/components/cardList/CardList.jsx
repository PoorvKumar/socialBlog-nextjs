import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from './Card';

const getData=async (page,cat)=>
{
  const res=await fetch(`${process.env.NEXT_DEPLOY_URL}/api/posts?page=${page}&cat=${cat || ""}`,{
    cache: "no-store",
  });

  if(!res.ok)
  {
    throw new Error("Failed");
  }

  return res.json();
}

const CardList = async ({page,cat}) => {

  const {posts,count}=await getData(page,cat);
  // console.log(data);

  const POSTS_PER_PAGE=3;

  const hasPrev=POSTS_PER_PAGE*(page-1)>0;
  const hasNext=POSTS_PER_PAGE*(page)<count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item)=>(
          <Card key={item._id} item={item}/>
        ))}
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
  )
}

export default CardList;