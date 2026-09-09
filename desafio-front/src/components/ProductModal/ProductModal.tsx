import { useEffect } from 'react';
import { Product } from '../../types/product';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar modal">
          &times;
        </button>

        <div className={styles.content}>
          <div className={styles.imageBox}>
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className={styles.details}>
            <h2 id="modal-title" className={styles.title}>{product.productName}</h2>
            <span className={styles.price}>{formattedPrice}</span>
            <p className={styles.description}>{product.descriptionShort}</p>
            <a href="#" className={styles.moreLink}>Veja mais detalhes do produto &gt;</a>

            <button type="button" className={styles.buyButton}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};