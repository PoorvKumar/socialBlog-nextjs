import Image from "next/image";
import styles from "./featured.module.css";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> <b>Unlock your hidden potential:</b> Where every post becomes a story!</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p2.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Transforming Every Post into a Captivating Story!</h1>
          <p className={styles.postDesc}>In the vast landscape of social media and online content, standing out has become increasingly challenging. In a sea of posts and updates, how can you make your voice heard, your message resonate, and your content truly memorable?</p>
          {/* <button className={styles.button}>Read More</button> */}
          <Link href="/posts/transforming-every-post-into-a-captivating-story" className={styles.button}>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default Featured