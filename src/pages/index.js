import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/navbar/index";
import { Footer } from "../components/footer/index";
import styles from "../styles/pages/home.module.css";
import TypeWrite from "../components/typewriting/typewriting";
import { getAllPosts } from "../services/api.js";
import Link from "next/link";
import ReactPlayer from "react-player";

export default function Home({ posts }) {
  return (
    <div className={styles.main}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800&family=Roboto+Mono:wght@500&display=swap');
      </style>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/avatar.png"></link>
      </Head>
      <Navbar />
      <div className={styles.grid}>
        <div className={styles.container}>
          <div className={styles.ogrid}>
            <div className={styles.mcol}>
              <p className={styles.welcome}>
                  Olá, Eu sou o John!
                <br />
                Um Brasileiro 🇧🇷
                <br />
                <TypeWrite /> <br />
              </p>
            </div>
          </div>

          <div className={styles.ogrid}>
            <div class={styles.ctitlebargrid}>
              <div class={styles.ctitlebar}>
                <h3 class={styles.ctitlebartitle}>Posts Recentes</h3>
                <span class={styles.ctitlebardivider}></span>
              </div>
            </div>
          </div>

          <div className={styles.ogrid}>
            {posts.slice(0, 3).map((post) => (
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
          </div>

          <div className={styles.ogrid}>
            <div className={styles.mgrid}>
              <div className={styles.mcol}>
                <div class={styles.buttoncontainer}>
                  <a href="/blog" class={styles.button}>
                    Todos os Posts →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ogrid}>
            <div class={styles.ctitlebargrid}>
              <div class={styles.ctitlebar}>
                <h3 class={styles.ctitlebartitle}>Último Vídeo</h3>
                <span class={styles.ctitlebardivider}></span>
              </div>
            </div>
          </div>

          <div className={styles.ogrid}>

              <div className={styles.playerwrapper}>
                <ReactPlayer
                  className={styles.reactplayer}
                  width="100%"
                  height="100%"
                  url="https://www.youtube.com/watch?v=RRnDDlN0nvc"
                />
              </div>

          </div>

          <br />
          <div className={styles.ogrid}>
            <div class={styles.ctitlebargrid}>
              <div class={styles.ctitlebar}>
                <h3 class={styles.ctitlebartitle}>Links Úteis</h3>
                <span class={styles.ctitlebardivider}></span>
              </div>
            </div>
          </div>
          <div className={styles.ogrid}>
            <div className={styles.mcol}>
              <section className={styles.linksboard}>
                <a id={styles.a} href="/blog">
                  <div id={styles.instagram} class={styles.Cards}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-book"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                    </svg>
                  </div>
                  <h2 id={styles.h2}>Blog</h2>
                  <span className={styles.username}>Conteúdos sobre o mundo Tech!</span>
                </a>

                <a
                  id={styles.a}
                  href="https://linkedin.com/in/jonathangonsalves/"
                  rel="noopener"
                  target="_blank"
                >
                  <div id={styles.linkedin} class={styles.Cards}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <h2 id={styles.h2}>LinkedIn</h2>
                  <span className={styles.username}>Jonathan Gonsalves</span>
                </a>
                <a
                  id={styles.a}
                  href="https://github.com/jonathangonsalves"
                  rel="noopener"
                  target="_blank"
                >
                  <div id={styles.github} class={styles.Cards}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-github"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <h2 id={styles.h2}>Github</h2>
                  <span className={styles.username}>@jonathangonsalves</span>
                </a>
                <a
                  id={styles.a}
                  href="https://instagram.com/developedbyjohn/"
                  rel="noopener"
                  target="_blank"
                >
                  <div id={styles.instagram} class={styles.Cards}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-instagram"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <h2 id={styles.h2}>Instagram</h2>
                  <span className={styles.username}>@developedbyjohn</span>
                </a>

                <a
                  id={styles.a}
                  href="https://www.youtube.com/channel/UCgaPJd8C4DtGc1oykjhHs2w"
                  rel="noopener"
                  target="_blank"
                >
                  <div id={styles.youtube} class={styles.Cards}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </div>
                  <h2 id={styles.h2}>Youtube</h2>
                  <span className={styles.username}>Dev John</span>
                </a>
                <a
                  id={styles.a}
                  href="https://dsc.bio/johngonsalves"
                  rel="noopener"
                  target="_blank"
                >
                  <div id={styles.youtube} class={styles.Cards}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-discord"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
                      <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z" />
                    </svg>
                  </div>
                  <h2 id={styles.h2}>Discord</h2>
                  <span className={styles.username}>@johngonsalves</span>
                </a>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = getAllPosts(["title", "description", "date", "datestamp", "slug"]);

  return {
    props: { posts },
  };
}
