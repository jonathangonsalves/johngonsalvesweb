import styles from "../../styles/components/footer.module.css";

export const Footer = () => {
  return (
    <footer class={styles.cfooter}>
      <div class={styles.ogrid}>
        <div class={styles.ogridcol}>
          <div class={styles.cfootercopy}>
            © 2021 john.com - Jonathan Gonsalves
          </div>
        </div>
      </div>
    </footer>
  );
};
