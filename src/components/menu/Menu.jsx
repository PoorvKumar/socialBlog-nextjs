import React from 'react';
import styles from "./menu.module.css";
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.subtitle}>{"What's Hot"}</h4>
      <h2 className={styles.title}>Most Popular</h2>
      <MenuPosts withImage={false}/>

      {/* {Categories} */}

      <h4 className={styles.subtitle}>{"Discover by topic"}</h4>
      <h2 className={styles.title}>Categories</h2>
      <MenuCategories />

      {/* {Editor's Pick} */}

      <h4 className={styles.subtitle}>{"Chosen by the editor"}</h4>
      <h2 className={styles.title}>Editors Pick</h2>
      <MenuPosts withImage={true}/>
    </div>
  )
}

export default Menu