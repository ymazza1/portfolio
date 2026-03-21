import styles from './Nav.module.css'

const Nav = ({ isDark, onToggleTheme }) => (
  <nav className={styles.nav} aria-label="Navigation principale">
    <a href="/" className={styles.brand} aria-label="Yoann Mazza — accueil">YM.</a>
    <div className={styles.right}>
      <a href="#experience" className={styles.link}>Expérience</a>
      <a href="#contact" className={styles.link}>Contact</a>
      <button
        className={styles.toggle}
        onClick={onToggleTheme}
        aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
      >
        {isDark ? '☽ Clair' : '☀ Sombre'}
      </button>
    </div>
  </nav>
)

export default Nav
