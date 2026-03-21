import { experiences } from '../data/portfolio'
import Section from './Section'
import styles from './Experience.module.css'

const Experience = () => (
  <Section title="Expérience" id="experience">
    <div className={styles.list}>
      {experiences.map((xp) => (
        <article key={`${xp.period}-${xp.company}`} className={styles.item}>
          <span className={styles.period}>{xp.period}</span>
          <div className={styles.body}>
            <h3 className={styles.role}>{xp.role}</h3>
            <p className={styles.company}>{xp.company} · {xp.location}</p>
            <p className={styles.description}>{xp.description}</p>
            <div className={styles.chips}>
              {xp.tags.map((tag) => (
                <span key={tag} className={styles.chip}>{tag}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
)

export default Experience
