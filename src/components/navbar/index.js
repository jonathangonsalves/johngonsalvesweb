import styles from "../../styles/components/navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.hgrid}>
        <div className={styles.hcol}>
          <div className={styles.hcolinner}>
            <div className={styles.logo}>
              <img src="/avatar.png" alt="John Logo" />
            </div>
            <div className={styles.navwrap}>
              <ul className={styles.navlist}>
                <li className={styles.navitem}>
                  <a href="/" className={styles.navlink}>
                    Home
                  </a>
                </li>
                <li className={styles.navitem}>
                  <a href="/blog" className={styles.navlink}>
                    Blog
                  </a>
                </li>
                <li id={styles.svg_logo} className={styles["navitem"] + " " + styles["itemsocial"]}>
                  <a
                    href="https://linkedin.com/in/jonathangonsalves/"
                    rel="noopener"
                    target="_blank"
                  >
                    <div className={styles["icon"]}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="bi bi-book"
                        viewBox="0 0 50 50"
                      >
                        <path d="M36.1 12H13.9c-1.1 0-1.9.8-1.9 1.9v22.2c0 1 .9 1.9 1.9 1.9h22.2c1.1 0 1.9-.8 1.9-1.9V13.9c0-1.1-.9-1.9-1.9-1.9zM20 34h-4V22h4v12zm-2-13.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM34 34h-4v-6c0-1.6-.4-3.2-2-3.2s-2 1.6-2 3.2v6h-4V22h4v1.4h.2c.5-1 1.8-1.8 3.3-1.8 3.7 0 4.5 2.4 4.5 5.4v7z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li id={styles.svg_logo} className={styles["navitem"] + " " + styles["itemsocial"]}>
                  <a
                    href="https://github.com/jonathangonsalves"
                    rel="noopener"
                    target="_blank"
                  >
                    <div className={styles["icon"]}>
                      <img
                        src="https://raw.githubusercontent.com/simple-icons/simple-icons/b4fd6d4d7271492277e5158a7fdeef5ef1735c9d/icons/github.svg"
                        width="20"
                        height="20"
                      />
                    </div>
                  </a>
                </li>
                <li id={styles.svg_logo} className={styles["navitem"] + " " + styles["itemsocial"]}>
                  <a
                    href="https://www.youtube.com/channel/UCgaPJd8C4DtGc1oykjhHs2w"
                    rel="noopener"
                    target="_blank"
                  >
                    <div className={styles["icon"]}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="bi bi-book"
                        viewBox="0 0 50 50"
                      >
                        <path d="M39.7 18.6s-.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C31.3 14 25 14 25 14s-6.3 0-10.5.3c-.6.1-1.9.1-3 1.3-.9.9-1.2 3-1.2 3S10 21 10 23.4v2.2c0 2.4.3 4.9.3 4.9s.3 2.1 1.2 3c1.1 1.2 2.6 1.2 3.3 1.3 2.4.1 10.2.2 10.2.2s6.3 0 10.5-.3c.6-.1 1.9-.1 3-1.3.9-.9 1.2-3 1.2-3s.3-2.4.3-4.8v-2.2c0-2.4-.3-4.8-.3-4.8zm-17.8 9.8V20l8.1 4.2-8.1 4.2z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
