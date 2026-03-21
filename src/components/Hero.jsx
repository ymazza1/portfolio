import { meta } from '../data/portfolio'
import HextechOrnament from './HextechOrnament'
import { useCvDownload } from '../hooks/useCvDownload.jsx'
import styles from './Hero.module.css'

const Hero = ({ theme }) => {
  const { download, loading } = useCvDownload(theme)

  return (
    <section className={styles.hero} aria-label="Présentation">
      <HextechOrnament />
      <div className={styles.content}>
        <p className={styles.pretitle}>{meta.title}</p>
        <h1 className={styles.name}>
          {meta.name.split(' ')[0]}
          <em className={styles.lastName}>{meta.name.split(' ')[1]}</em>
        </h1>
        <div className={styles.location}>
          <span className={styles.dot} aria-hidden="true" />
          <span>{meta.location}</span>
        </div>
        <p className={styles.tagline}>{meta.tagline}</p>
        <div className={styles.cta}>
          <a href="#contact" className={styles.btnPrimary}>Me contacter</a>
          <button
            className={styles.btnSecondary}
            onClick={download}
            disabled={loading}
            aria-busy={loading}
            aria-label={loading ? 'Génération du CV en cours' : 'Télécharger le CV en PDF'}
          >
            {loading ? 'Génération…' : 'Télécharger le CV'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
