import { useTheme } from './hooks/useTheme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import './styles/tokens.css'

const SkipLink = () => (
  <a
    href="#main-content"
    style={{
      position: 'absolute',
      top: '-100px',
      left: '1rem',
      padding: '0.6rem 1.2rem',
      background: 'var(--gld)',
      color: '#0a0600',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.85rem',
      fontWeight: 500,
      borderRadius: 'var(--radius)',
      zIndex: 100,
      transition: 'top 0.2s',
    }}
    onFocus={(e) => { e.target.style.top = '1rem' }}
    onBlur={(e) => { e.target.style.top = '-100px' }}
  >
    Aller au contenu principal
  </a>
)

const Footer = () => (
  <footer style={{
    padding: '1.4rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.73rem',
    color: 'var(--txt3)',
    letterSpacing: '0.05em',
  }}>
    <span>© {new Date().getFullYear()} Yoann Mazza</span>
    <span>Les Sorinières · Nantes</span>
  </footer>
)

const App = () => {
  const { theme, isDark, toggle } = useTheme()

  return (
    <>
      <SkipLink />
      <Nav isDark={isDark} onToggleTheme={toggle} />
      <main id="main-content">
        <Hero theme={theme} />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
