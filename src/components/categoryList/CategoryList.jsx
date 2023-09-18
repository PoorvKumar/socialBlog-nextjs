import React from 'react';
import styles from "./categoryList.module.css";
import Image from 'next/image';
import Link from 'next/link';
import Category from './Category';

const getData=async ()=>
{
  const res=await fetch(`${process.env.NEXT_DEPLOY_URL}/api/categories`,{
    cache: "no-store",
  });

  if(!res.ok)
  {
    throw new Error("Failed");
  }

  return res.json();
}

const CategoryList =async () => {

  const data=await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
        {data?.map((item)=>
        (
          <Category key={item._id} cat={item.title} imgsrc={item.img} style={styles[item.slug]}/>
        ))}
        {/* <Category cat="style" imgsrc="/style.png" style={styles.style}/>
        <Category cat="fashion" imgsrc="/fashion.png" style={styles.fashion}/>
        <Category cat="food" imgsrc="/food.png" style={styles.food}/>
        <Category cat="travel" imgsrc="/travel.png" style={styles.travel}/>
        <Category cat="culture" imgsrc="/culture.png" style={styles.culture}/>
        <Category cat="coding" imgsrc="/coding.png" style={styles.coding}/> */}
      </div>
    </div>
  )
}

export default CategoryList