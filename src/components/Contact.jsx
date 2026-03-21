import { meta } from '../data/portfolio'
import Section from './Section'
import styles from './Contact.module.css'

const Contact = () => (
  <Section title="Contact" id="contact">
    <div className={styles.grid}>
      <a
        href={`mailto:${meta.email}`}
        className={`${styles.card} ${styles.featured}`}
        aria-label={`Envoyer un e-mail à ${meta.email}`}
      >
        <span className={styles.label}>E-mail</span>
        <span className={styles.value}>{meta.email}</span>
      </a>
      <a
        href={meta.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.card} ${styles.featured}`}
        aria-label="Profil LinkedIn de Yoann Mazza (s'ouvre dans un nouvel onglet)"
      >
        <span className={styles.label}>LinkedIn</span>
        <span className={styles.value}>Yoann Mazza →</span>
      </a>
      <div className={styles.card}>
        <span className={styles.label}>Localisation</span>
        <span className={styles.value} style={{ color: 'var(--txt2)' }}>{meta.location}, France</span>
      </div>
      <div className={styles.card}>
        <span className={styles.label}>Disponibilité</span>
        <span className={styles.value} style={{ color: 'var(--gld)', fontWeight: 500 }}>
          {meta.availability}
        </span>
      </div>
    </div>
    <p className={styles.note}>{meta.availabilityNote}</p>
  </Section>
)

export default Contact
