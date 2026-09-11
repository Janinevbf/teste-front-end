import { useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../App';
import styles from './ProductShelf.module.scss';

interface ProductShelfProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
  loading: boolean;
  error: string | null;
  showSeeAll?: boolean; // Prop para controlar a exibição do 'Ver todos'
}

const subcategories = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

export function ProductShelf({ 
  products, 
  onOpenModal, 
  loading, 
  error,
  showSeeAll = false 
}: ProductShelfProps) {
  const [activeTab, setActiveTab] = useState('CELULAR');

  return (
    <section className={styles.shelfContainer}>
      <div className={styles.titleWrapper}>
        <div className={styles.line} />
        <h2>Produtos relacionados</h2>
        <div className={styles.line} />
      </div>

      {/* Renderiza as abas de categoria na primeira vitrine */}
      {!showSeeAll && (
        <div className={styles.tabsContainer}>
          {subcategories.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabItem} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Renderiza o 'Ver todos' na segunda vitrine (abaixo dos Parceiros) */}
      {showSeeAll && (
        <a href="#ver-todos" className={styles.seeAllSub}>
          Ver todos
        </a>
      )}

      <div className={styles.carouselWrapper}>
        <button className={`${styles.arrowBtn} ${styles.prev}`} aria-label="Anterior">
          ‹
        </button>

        {loading && <p className={styles.message}>Carregando produtos...</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}

        {!loading && !error && (
          <div className={styles.productGrid}>
            {products.slice(0, 4).map((product, index) => (
              <ProductCard
                key={`${product.productName}-${index}`}
                product={product}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        )}

        <button className={`${styles.arrowBtn} ${styles.next}`} aria-label="Próximo">
          ›
        </button>
      </div>
    </section>
  );
}