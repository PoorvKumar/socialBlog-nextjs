import React from 'react';
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="/"><Image src="/youtube.png" alt='youtube' width={24} height={24}/></Link>
        <a href="https://twitter.com/PoorvKumar1" target='_blank'><Image src="/twitter.png" alt='twitter' width={24} height={24}/></a>
        <a href="https://www.instagram.com/poorv1/" target='_blank'><Image src="/instagram.png" alt='instagram' width={24} height={24}/></a>
        <Link href="/"><Image src="/facebook.png" alt='facebook' width={24} height={24}/></Link>
      </div>
      <div className={styles.logo}><Link href={"/"}>socialBlog</Link></div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar;