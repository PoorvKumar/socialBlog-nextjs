"use client";

import React, { useState } from 'react';
import styles from "./comments.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
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

const Comments = ({ postSlug }) => {

    const { status } = useSession();
    // console.log(postSlug);

    // const baseURL="http://localhost:3000";
    // const baseURL="https://socialblog-alpha.vercel.app";

    const { data, mutate, isLoading } = useSWR(`/api/comments?postSlug=${postSlug}`, fetcher);
    // console.log(data);

    const [desc,setDesc]=useState("");

    const handleSubmit = async () => {
        try {
          // Check if desc is empty before making the POST request
          if (!desc.trim()) {
            return;
          }
      
          const response = await fetch("/api/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ desc, postSlug }),
          });
      
          if (!response.ok) {
            throw new Error("Failed to submit comment");
          }
      
          // Assuming the request was successful, you can clear the input field
          setDesc("");
          document.querySelector('#comment').value = "";
      
          // Manually revalidate the SWR cache after a successful POST request
          mutate();
        } 
        catch(error) 
        {
          console.error("Error submitting comment:", error);
        }
      };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea id='comment' placeholder='Write a comment' className={styles.input} onChange={e=>setDesc(e.target.value)}/>
                    <button className={styles.button} onClick={handleSubmit}>Send</button>
                </div>
            ) : (
                <Link href="/login">
                    Login to write a comment
                </Link>
            )}
            <div className={styles.comments}>
                {isLoading ? "loading" : data?.map((item) => (
                    <div className={styles.comment} key={item._id}>
                        <div className={styles.user}>
                            {item?.user?.image && <Image src={item?.user?.image} alt='' className={styles.image} width={50} height={50} />}
                            <div className={styles.userInfo}>
                                <span className={styles.username}>{item?.user?.name}</span>
                                <span className={styles.date}>{item?.createdAt.substring(0,10)} ( {item?.createdAt.substring(11,16)} )</span>
                            </div>
                        </div>
                        <p className={styles.desc}>{item?.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments