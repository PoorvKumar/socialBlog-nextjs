import React from 'react';
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>Sign in with Google</div>
            <div className={styles.socialButton}>Sign in with Github</div>
            <div className={styles.socialButton}>Sign in with Twitter</div>
        </div>
    </div>
  )
}

export default LoginPage