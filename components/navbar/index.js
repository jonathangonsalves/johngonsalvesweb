import styles from "../../styles/components/navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/sign.png" alt="John Logo" />
      </div>

      <ul className={styles.navlinks}>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
      </ul>
    </nav>
  );
};
