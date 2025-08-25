import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Daily Tech</div>
      <div className={styles.text}>
        Daily Tech © {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
};

export default Footer;