import { education } from '../data/portfolio'
import Section from './Section'
import styles from './Education.module.css'

const Education = () => (
  <Section title="Formation">
    <div className={styles.list}>
      {education.map((edu) => (
        <article key={`${edu.period}-${edu.school}`} className={styles.item}>
          <span className={styles.period}>{edu.period}</span>
          <div>
            <h3 className={styles.degree}>{edu.degree}</h3>
            <p className={styles.school}>{edu.school}</p>
            <p className={styles.description}>{edu.description}</p>
          </div>
        </article>
      ))}
    </div>
  </Section>
)

export default Education
