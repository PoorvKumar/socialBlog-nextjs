"use client";

import { useEffect, useState } from 'react';
import styles from "./writePage.module.css";
import Image from 'next/image';
// import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic'; //to fix "document not defined"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';

const DynamicReactQuill = dynamic(() => import('react-quill'), {
    ssr: false, // Set ssr to false to avoid server-side rendering
});

const storage = getStorage(app);

const WritePage = () => {

    const [file, setFile] = useState(null); //file
    const [media, setMedia] = useState(""); //filename
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");
    const [shortDescription, setShortDescription] = useState("");

    const router = useRouter();

    const { status } = useSession();
    // console.log(data,status);

    useEffect(() => {
        const upload = () => {

            const name=new Date().getTime + file.name;

            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setMedia(downloadURL);
                    });
                }
            );
        }

        file && upload();
    }, [file])

    if (status === "loading") {
        return (
            <div className={styles.loading}>
                Loading...
            </div>
        );
    }

    if (status === "unauthenticated") {
        router.push("/login");
    }

      const slugify=(str)=>
      {
        return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      }

    // Function to extract text from the first <p> tag
    const extractShortDescription = (content) => {
        const div = document.createElement('div');
        div.innerHTML = content;
        const firstPTag = div.querySelector('p');
        return firstPTag ? firstPTag.textContent : '';
    };

    const handleSubmit=async ()=>
    {
        const shortDesc=extractShortDescription(value);
        shortDesc.slice(0,60);
        setShortDescription(shortDesc);

        const res=await fetch("/api/posts",{
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "style", //when not selected, chooses style as default
                shortDesc
            })
        });

        // console.log(res);

        if(res.status===200)
        {
            const data=await res.json();
            // console.log(data);
            router.push(`/posts/${data.slug}`);
        }
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} onChange={e=>setTitle(e.target.value)}/>
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                Category
                <option value="style">Style</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="culture">Culture</option>
                <option value="travel">Travel</option>
                <option value="coding">Coding</option>
            </select>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt='' width={16} height={16} />
                </button>

                {open && (
                    <div className={styles.add}>
                        <input type="file" id="image" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                        <button className={styles.addButton}>
                            <label htmlFor="image">
                                <Image src="/image.png" alt='' width={16} height={16} />
                            </label>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt='' width={16} height={16} />
                        </button>
                    </div>
                )}
                <DynamicReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder='Tell your story' />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>Publish</button>
        </div>
    )
}

export default WritePage;