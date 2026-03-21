import { skills } from '../data/portfolio'
import Section from './Section'
import styles from './Skills.module.css'

const Skills = () => (
  <Section title="Compétences">
    <dl className={styles.list}>
      {skills.map(({ category, items }) => (
        <div key={category} className={styles.row}>
          <dt className={styles.category}>{category}</dt>
          <dd className={styles.tags}>
            <ul className={styles.tagList}>
              {items.map((item) => (
                <li key={item} className={styles.tag}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </Section>
)

export default Skills
