import styles from './Header.module.scss';

import logoEconverse from '../../assets/icons/Logo.png';

import iconShield from '../../assets/icons/shield.png';
import iconTruck from '../../assets/icons/truck.png';
import iconCreditCard from '../../assets/icons/credit-card.png';
import iconBox from '../../assets/icons/box.png';
import iconHeart from '../../assets/icons/heart.png';
import iconUser from '../../assets/icons/user.png';
import iconCart from '../../assets/icons/cart.png';
import iconSearch from '../../assets/icons/search.png';
import iconCrown from '../../assets/icons/CrownSimple.png'

export function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.topBar}>
                <div className={styles.topBarContent}>
                    <div className={styles.topBarItem}>
                        <img src={iconShield} alt="Segurança" />
                        <span>Compra <strong>100% segura</strong></span>
                    </div>
                    <div className={styles.topBarItem}>
                        <img src={iconTruck} alt="Frete" />
                        <span><strong>Frete grátis</strong> acima de R$ 200</span>
                    </div>
                    <div className={styles.topBarItem}>
                        <img src={iconCreditCard} alt="Parcelamento" />
                        <span><strong>Parcele</strong> suas compras</span>
                    </div>
                </div>
            </div>

            {/* Main Header (Logo, Busca, Ícones) */}
            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={logoEconverse} alt="Econverse" />
                    </div>

                    <div className={styles.searchBox}>
                        <input type="text" placeholder="O que você está buscando?" />
                        <img src={iconSearch} alt="" />
                    </div>

                    <div className={styles.iconsGroup}>
                        <button type="button" aria-label="Pedidos"><img src={iconBox} alt="" /></button>
                        <button type="button" aria-label="Favoritos"><img src={iconHeart} alt="" /></button>
                        <button type="button" aria-label="Minha Conta"><img src={iconUser} alt="" /></button>
                        <button type="button" aria-label="Carrinho"><img src={iconCart} alt="" /></button>
                    </div>
                </div>
            </div>

            {/* Menu de Categorias */}
            <nav className={styles.navMenu}>
                <div className={styles.container}>
                    <ul>
                        <li><a href="#">TODAS CATEGORIAS</a></li>
                        <li><a href="#">SUPERMERCADO</a></li>
                        <li><a href="#">LIVROS</a></li>
                        <li><a href="#">MODA</a></li>
                        <li><a href="#">LANÇAMENTOS</a></li>
                        <li><a href="#" className={styles.active}>OFERTAS DO DIA</a></li>
                        <li>
                            <a href="#" className={styles.subscriptionLink}>
                            <img src={iconCrown} alt="" /> ASSINATURA
                             </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}