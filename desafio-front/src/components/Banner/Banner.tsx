import styles from '../Banner/Banner.module.scss';

export function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Venha conhecer nossas promoções</h1>
            <h2>
              <strong>50% Off</strong> <span>nos produtos</span>
            </h2>
            <button className={styles.button}>Ver produto</button>
          </div>
        </div>
      </div>
    </section>
  );
}