import styles from './Categories.module.scss';

import iconTecnologia from '../../assets/icons/tecnologia.png';
import iconSupermercado from '../../assets/icons/supermercado.png';
import iconBebidas from '../../assets/icons/bebidas.png';
import iconFerramentas from '../../assets/icons/ferramentas.png';
import iconSaude from '../../assets/icons/saude.png';
import iconCorrida from '../../assets/icons/corrida.png';
import iconModa from '../../assets/icons/moda.png';

const categories = [
  { id: 1, name: 'Tecnologia', icon: iconTecnologia, active: true },
  { id: 2, name: 'Supermercado', icon: iconSupermercado, active: false },
  { id: 3, name: 'Bebidas', icon: iconBebidas, active: false },
  { id: 4, name: 'Ferramentas', icon: iconFerramentas, active: false },
  { id: 5, name: 'Saúde', icon: iconSaude, active: false },
  { id: 6, name: 'Esportes e Fitness', icon: iconCorrida, active: false },
  { id: 7, name: 'Moda', icon: iconModa, active: false },
];

export function Categories() {
  return (
    <section className={styles.categoriesContainer}>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <div key={cat.id} className={`${styles.item} ${cat.active ? styles.active : ''}`}>
            <div className={styles.iconCard}>
              <img src={cat.icon} alt={cat.name} />
            </div>
            <span className={styles.label}>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}