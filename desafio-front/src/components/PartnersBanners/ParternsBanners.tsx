import styles from './PartnersBanners.module.scss';
import partnerBg from '../../assets/partner-bg.png'; // Exporte a imagem do Figma e salve em assets

export function PartnersBanners() {
  return (
    <section className={styles.partnersContainer}>
      <div 
        className={styles.partnerCard}
        style={{ backgroundImage: `url(${partnerBg})` }}
      >
        <div className={styles.overlay}>
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className={styles.btnConfira}>CONFIRA</button>
        </div>
      </div>

      <div 
        className={styles.partnerCard}
        style={{ backgroundImage: `url(${partnerBg})` }}
      >
        <div className={styles.overlay}>
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className={styles.btnConfira}>CONFIRA</button>
        </div>
      </div>
    </section>
  );
}