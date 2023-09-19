import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="" width={50} height={50} style={{borderRadius: "50%"}}/>
          <h1 className={styles.logoText}>PoorvKumar</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae odit atque reprehenderit harum vitae sit accusantium expedita veritatis quisquam!</p>
        <div className={styles.icons}>
        <Link href="/"><Image src="/youtube.png" alt='youtube' width={18} height={18}/></Link>
        <a href="https://twitter.com/PoorvKumar1" target='_blank'><Image src="/twitter.png" alt='twitter' width={18} height={18}/></a>
        <a href="https://www.instagram.com/poorv1/" target='_blank'><Image src="/instagram.png" alt='instagram' width={18} height={18}/></a>
        <Link href="/"><Image src="/facebook.png" alt='facebook' width={18} height={18}/></Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <a href="https://github.com/PoorvKumar/socialBlog-nextjs" target='_blank'>Github</a>
          <a href="https://www.linkedin.com/in/PoorvKumar" target='_blank'>Linkedin</a>
          <a href="https://twitter.com/PoorvKumar1" target='_blank'>Twitter</a>
          <Link href="/">socialBlog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/blog?cat=travel">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=style">Style</Link>
          <Link href="/blog?cat=travel">Travel</Link>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=culture">Culture</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;