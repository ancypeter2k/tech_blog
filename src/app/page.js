import Link from "next/link";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Fresh insights, every day.</h1>
        <p className={styles.desc}>
          Stay ahead with Daily Tech — your daily feed of innovation, trends, and creative breakthroughs.
        </p>
        <div className={styles.buttons}>
          <Link href="/about" passHref>
            <button className={styles.learnBtn}>
              Learn More
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className={styles.contactBtn}>
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
