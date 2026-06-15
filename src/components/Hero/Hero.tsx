import styles from "./Hero.module.css";

const heroImages = [
  "https://picsum.photos/600/900?random=1",
  "https://picsum.photos/600/900?random=2",
  "https://picsum.photos/600/900?random=3",
  "https://picsum.photos/600/900?random=4",
  "https://picsum.photos/600/900?random=5",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={styles.panel}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.welcome}>WELCOME TO</span>

        <h1 className={styles.title}>
          MANDGE & SONS
        </h1>

        <h2 className={styles.subtitle}>
          Building Excellence Across
          <br />
          Design, Manufacturing & Real Estate
        </h2>

        <p className={styles.tagline}>
          INNOVATION • CRAFTSMANSHIP • TRUST
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            Explore Our Ventures
          </button>

          <button className={styles.secondaryBtn}>
            Watch Our Story
          </button>
        </div>
      </div>
    </section>
  );
}