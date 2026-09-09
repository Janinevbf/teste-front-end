import styles from './Banner.module.scss';
import bannerImg from '../../assets/banner.jpg'; // Garanta o caminho correto da imagem exportada

export function Banner() {
  return (
    <section 
      className={styles.banner} 
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Venha conhecer nossas promoções</h1>
            <h2><strong>50% Off</strong> nos produtos</h2>
            <button className={styles.button}>Ver produto</button>
          </div>
        </div>
      </div>
    </section>
  );
}