import { useState } from 'react';
import { Product } from '../../App';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar modal">
          ✕
        </button>

        <div className={styles.productImageWrapper}>
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className={styles.productDetails}>
          <h2 className={styles.title}>{product.productName}</h2>
          <p className={styles.price}>{formattedPrice}</p>
          <p className={styles.description}>
            {product.descriptionShort || 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.'}
          </p>

          <a href="#detalhes" className={styles.detailsLink}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className={styles.actionRow}>
            <div className={styles.quantityControl}>
              <button type="button" onClick={handleDecrease}>-</button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button type="button" onClick={handleIncrease}>+</button>
            </div>

            <button type="button" className={styles.buyBtn}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}