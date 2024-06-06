import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={
              post.img ||
              `https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg`
            }
            alt="Post Image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>
          {post.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
