import React from 'react';
import styles from "./singlePage.module.css";
import Image from 'next/image';
import Menu from '@/components/menu/Menu';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing .</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2023</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia, in aliquam impedit id minima, recusandae explicabo quibusdam inventore corrupti libero hic deleniti tenetur possimus adipisci. Repellat labore quasi sapiente! Ex, non officia dignissimos omnis nobis ea esse, quo corporis fuga minima repellat dolore nemo, quod amet! Illum, facilis expedita.</p>
                    
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem asperiores eum quis ad minus est architecto doloribus eos, explicabo dolores.</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, rerum.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia, in aliquam impedit id minima, recusandae explicabo quibusdam inventore corrupti libero hic deleniti tenetur possimus adipisci. Repellat labore quasi sapiente! Ex, non officia dignissimos omnis nobis ea esse, quo corporis fuga minima repellat dolore nemo, quod amet! Illum, facilis expedita.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia, in aliquam impedit id minima, recusandae explicabo quibusdam inventore corrupti libero hic deleniti tenetur possimus adipisci. Repellat labore quasi sapiente! Ex, non officia dignissimos omnis nobis ea esse, quo corporis fuga minima repellat dolore nemo, quod amet! Illum, facilis expedita.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia, in aliquam impedit id minima, recusandae explicabo quibusdam inventore corrupti libero hic deleniti tenetur possimus adipisci. Repellat labore quasi sapiente! Ex, non officia dignissimos omnis nobis ea esse, quo corporis fuga minima repellat dolore nemo, quod amet! Illum, facilis expedita.</p>
                </div>
                <div className={styles.comment}>
                    <Comments />
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePage;