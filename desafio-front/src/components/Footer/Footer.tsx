import styles from './Footer.module.scss';
import logoEconverse from '../../assets/icons/Logo.png';

export function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <section className={styles.newsletter} aria-labelledby="newsletter-title">
        <div className={styles.container}>
          <div className={styles.newsText}>
            <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>

          <form className={styles.newsForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Digite seu nome" required aria-label="Digite seu nome" />
              <input type="email" placeholder="Digite seu e-mail" required aria-label="Digite seu e-mail" />
              <button type="submit">INSCREVER</button>
            </div>

            <label className={styles.checkboxLabel}>
              <input type="checkbox" required />
              <span>Aceito os termos e condições</span>
            </label>
          </form>
        </div>
      </section>

      {/* Main Footer Links */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.brandCol}>
            <img src={logoEconverse} alt="Econverse Logo" className={styles.logo} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <nav className={styles.linksNav}>
            <div className={styles.linkGroup}>
              <h3>Institucional</h3>
              <ul>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Movimento</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Ajuda</h3>
              <ul>
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Fale Conosco</a></li>
                <li><a href="#">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Termos</h3>
              <ul>
                <li><a href="#">Termos e Condições</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Troca e Devolução</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className={styles.copyright}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}