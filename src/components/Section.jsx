import styles from './Section.module.css'

const Section = ({ title, id, children }) => (
  <section className={styles.section} id={id} aria-labelledby={id ? `${id}-heading` : undefined}>
    <div className={styles.heading}>
      <h2 className={styles.label} id={id ? `${id}-heading` : undefined}>{title}</h2>
      <span className={styles.line} aria-hidden="true" />
    </div>
    {children}
  </section>
)

export default Section
