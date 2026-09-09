import styles from './Brands.module.scss';
import logoEconverse from '../../assets/icons/Logo.png';

const brands = [1, 2, 3, 4, 5];

export function Brands() {
  return (
    <section className={styles.brandsContainer} aria-labelledby="brands-title">
      <h2 id="brands-title" className={styles.title}>
        Navegue por marcas
      </h2>

      <div className={styles.brandsGrid}>
        {brands.map((brand) => (
          <div key={brand} className={styles.brandCard}>
            <img src={logoEconverse} alt="Econverse Logo" />
          </div>
        ))}
      </div>
    </section>
  );
}