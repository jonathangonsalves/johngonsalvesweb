import React from "react";
import Head from "next/head";
import { Footer } from "../../components/footer/index";
import { Navbar } from "../../components/navbar/index";
import styles from "../../styles/pages/posts.module.css";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
{
  /* <ReactMarkdown source={content} /> */
}

function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;

  const renderers = {
    image: (image) => {
      return <Image src={image.src} alt={image.alt} height="100" width="100" />;
    },
  };

  return (
    <div className={styles.main}>
      <Head>
        <title className={styles.title}>{frontmatter.title}</title>
      </Head>
      <Navbar />
      <div className={styles.grid}>
        <div className={styles.container}>
          <article className={styles.article}>
            <div className={styles.post}>
              <h1 className={styles.title}>{frontmatter.title}</h1>
              <div className={styles.description}>
                <i className={styles.description}>{frontmatter.description}</i>
                <span class={styles.ctitlebardivider}></span>
              </div>
              <div className={styles.info}>
                <div class={styles.cpostheader__author_info}>
                  <div class={styles.cpostheader__author_name}>
                    {frontmatter.author}
                  </div>
                  <time class={styles.cpostheader__date}>
                    {frontmatter.date} .{" "}
                  </time>
                  <span class={styles.cpostheader__readingtime}>3 min read</span>
                </div>
              </div>
              <ReactMarkdown className={styles.posttext} renderers={renderers}>
                {content}
              </ReactMarkdown>
            </div>
          </article>

          <section className={styles.ccardauthor}>
            <div className={styles.ccardauthormedia}>
              <a href="/">
                <img
                  className={styles.ccardauthorimage}
                  alt="John Gonsalves"
                  src="/avatar.png"
                  width="100"
                  height="100"
                />
              </a>
            </div>

            <div class="c-card-author__content">
              <h3 class="c-card-author__name">
                <p>John Gonsalves</p>
              </h3>

              <p class="c-card-author__bio">
                Brasileiro, Engenheiro de Dados e amante de café ☕
              </p>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  // Import our .md file using the `slug` from the URL
  const content = await import(`../../posts/${slug}.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  // Pass data to our component props
  return { ...data };

  return { slug };
};

export default PostTemplate;
