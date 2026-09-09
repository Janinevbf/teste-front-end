import { Product } from '../../types/product';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard = ({ product, onOpenModal }: ProductCardProps) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.photo}
          alt={product.productName}
          onError={(e) => {
            e.currentTarget.src = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/items/poke-ball.png';
          }}
        />
      </div>

      <div className={styles.info}>
        <p className={styles.description}>{product.descriptionShort}</p>
        <span className={styles.oldPrice}>R$ 30,90</span>
        <strong className={styles.price}>
          {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </strong>
        <span className={styles.installments}>ou 2x de R$ 49,95 sem juros</span>
        <span className={styles.freight}>Frete grátis</span>

        <button className={styles.buyButton} onClick={() => onOpenModal(product)}>
          COMPRAR
        </button>
      </div>

    </article>
  );
};