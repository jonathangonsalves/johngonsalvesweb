import { Navbar } from "../components/navbar/index";
import { Footer } from "../components/footer/index";
import Head from "next/head";
import styles from "../styles/pages/blog.module.css";
import Link from "next/link";
import { getAllPosts } from "../services/api.js";

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/avatar.png"></link>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.mgrid}>
          <div className={styles.mcol}>
            <div className={styles.mcol_title}>
              <h1 className={styles.title}>posts</h1>
            </div>
          </div>
        </div>
        {posts.map((post) => (
          <div className={styles.mgrid}>
            <div className={styles.mcol}>
              <div className={styles.cgrid}>
                <div className={styles.card}>
                  <div className={styles.cardmeta}>
                    <time class={styles.cardtime} title={post.date}>
                      {post.date}
                    </time>
                  </div>
                  <div className={styles.cardcontent}>
                    <h2 className={styles.cardtitle}>
                      <Link
                        href={`blog/${post.slug}`}
                        className={styles.titlelink}
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className={styles.cardtext}>{post.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Footer />
      </main>
    </div>
  );
}

export function getStaticProps() {
  const posts = getAllPosts(["title", "description", "date", "slug"]);

  return {
    props: { posts },
  };
}
