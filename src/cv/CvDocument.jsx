import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'
import { meta, skills, experiences, education } from '../data/portfolio'

Font.register({
  family: 'CormorantGaramond',
  fonts: [
    { src: '/fonts/CormorantGaramond-Regular.woff', fontWeight: 400 },
    { src: '/fonts/CormorantGaramond-Bold.woff',    fontWeight: 700 },
  ],
})

Font.register({
  family: 'DMSans',
  fonts: [
    { src: '/fonts/DMSans-Light.woff',   fontWeight: 300 },
    { src: '/fonts/DMSans-Regular.woff', fontWeight: 400 },
    { src: '/fonts/DMSans-Medium.woff',  fontWeight: 500 },
  ],
})

// ─── Palettes ────────────────────────────────────────────────────────────────

const PALETTES = {
  dark: {
    bg:      '#09090F',
    surface: '#111119',
    gold:    '#C8A44A',
    text:    '#EDE9DF',
    muted:   '#9896A4',
    dim:     '#5E5C6A',
    border:  '#2A2A38',
  },
  light: {
    bg:      '#F5F0E8',
    surface: '#EDE8DC',
    gold:    '#8C5E12',
    text:    '#1A1612',
    muted:   '#5A5040',
    dim:     '#9A8E78',
    border:  '#D0C8B8',
  },
}

// ─── Style factory ───────────────────────────────────────────────────────────

const makeStyles = (p) => StyleSheet.create({
  page: {
    backgroundColor: p.bg,
    color: p.text,
    fontFamily: 'DMSans',
    fontWeight: 400,
    paddingTop: 48,
    paddingBottom: 56,
    paddingHorizontal: 48,
    fontSize: 9,
    lineHeight: 1.5,
  },
  header:   { marginBottom: 28 },
  pretitle: {
    fontFamily: 'DMSans',
    fontWeight: 300,
    fontSize: 7,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: p.gold,
    marginBottom: 8,
  },
  name: {
    fontFamily: 'CormorantGaramond',
    fontWeight: 700,
    fontSize: 38,
    color: p.text,
    lineHeight: 0.92,
  },
  nameGold: { color: p.gold },
  headerMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: p.border,
    borderTopStyle: 'solid',
  },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  metaDot:  { width: 3, height: 3, borderRadius: 2, backgroundColor: p.gold },
  metaText: { fontSize: 8, color: p.muted, fontFamily: 'DMSans', fontWeight: 300 },
  metaLink: { fontSize: 8, color: p.gold,  fontFamily: 'DMSans', fontWeight: 300, textDecoration: 'none' },

  section: { marginBottom: 22 },
  sectionHeading: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  sectionLabel: {
    fontSize: 7,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: p.gold,
    fontFamily: 'DMSans',
    fontWeight: 400,
  },
  sectionLine: { flex: 1, borderTopWidth: 0.5, borderTopColor: p.border, borderTopStyle: 'solid' },

  skillRow:  { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 },
  skillCat:  {
    fontSize: 7,
    color: p.dim,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    width: 60,
    paddingTop: 3,
    fontFamily: 'DMSans',
    fontWeight: 400,
    flexShrink: 0,
  },
  skillTags: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, flex: 1 },
  tag: {
    fontSize: 8,
    color: p.muted,
    borderWidth: 0.5,
    borderColor: p.border,
    borderStyle: 'solid',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 2,
    fontFamily: 'DMSans',
    fontWeight: 300,
  },

  entryRow: {
    flexDirection: 'row',
    gap: 16,
    paddingBottom: 12,
    marginBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: p.border,
    borderBottomStyle: 'solid',
  },
  entryRowLast: { flexDirection: 'row', gap: 16 },
  period: { fontSize: 7.5, color: p.dim, width: 62, flexShrink: 0, paddingTop: 1, fontFamily: 'DMSans', fontWeight: 300 },
  entryBody: { flex: 1 },
  role:        { fontSize: 10, fontFamily: 'DMSans', fontWeight: 500, color: p.text, marginBottom: 2 },
  company:     { fontSize: 8.5, color: p.gold, fontFamily: 'DMSans', fontWeight: 300, marginBottom: 5 },
  description: { fontSize: 8, color: p.muted, fontFamily: 'DMSans', fontWeight: 300, lineHeight: 1.6, marginBottom: 6 },
  chips:       { flexDirection: 'row', flexWrap: 'wrap', gap: 3 },
  chip: {
    fontSize: 7,
    color: p.dim,
    backgroundColor: p.surface,
    borderWidth: 0.5,
    borderColor: p.border,
    borderStyle: 'solid',
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    borderRadius: 2,
    fontFamily: 'DMSans',
    fontWeight: 300,
  },

  footer: {
    position: 'absolute',
    bottom: 28,
    left: 48,
    right: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderTopColor: p.border,
    borderTopStyle: 'solid',
    paddingTop: 8,
  },
  footerText: { fontSize: 7, color: p.dim, fontFamily: 'DMSans', fontWeight: 300, letterSpacing: 0.5 },
})

// ─── Sub-components ──────────────────────────────────────────────────────────

const SectionHeading = ({ title, s }) => (
  <View style={s.sectionHeading}>
    <Text style={s.sectionLabel}>{title}</Text>
    <View style={s.sectionLine} />
  </View>
)

const EntryRow = ({ entry, isLast, s }) => (
  <View style={isLast ? s.entryRowLast : s.entryRow}>
    <Text style={s.period}>{entry.period}</Text>
    <View style={s.entryBody}>
      <Text style={s.role}>{entry.role ?? entry.degree}</Text>
      <Text style={s.company}>
        {entry.company ? `${entry.company} · ${entry.location}` : entry.school}
      </Text>
      {entry.description && <Text style={s.description}>{entry.description}</Text>}
      {entry.tags && (
        <View style={s.chips}>
          {entry.tags.map((t) => <Text key={t} style={s.chip}>{t}</Text>)}
        </View>
      )}
    </View>
  </View>
)

// ─── Document ────────────────────────────────────────────────────────────────

const CvDocument = ({ theme = 'dark' }) => {
  const palette = PALETTES[theme] ?? PALETTES.dark
  const s = makeStyles(palette)

  return (
    <Document title={`CV — ${meta.name}`} author={meta.name} subject="Curriculum Vitae">
      <Page size="A4" style={s.page}>

        <View style={s.header}>
          <Text style={s.pretitle}>{meta.title}</Text>
          <Text style={s.name}>
            <Text>{meta.name.split(' ')[0]} </Text>
            <Text style={s.nameGold}>{meta.name.split(' ')[1]}</Text>
          </Text>
          <View style={s.headerMeta}>
            <View style={s.metaItem}><View style={s.metaDot} /><Text style={s.metaText}>{meta.location}</Text></View>
            <View style={s.metaItem}><View style={s.metaDot} /><Link src={`mailto:${meta.email}`} style={s.metaLink}>{meta.email}</Link></View>
            <View style={s.metaItem}><View style={s.metaDot} /><Link src={meta.linkedin} style={s.metaLink}>linkedin.com/in/yoann-mazza</Link></View>
            <View style={s.metaItem}><View style={s.metaDot} /><Text style={{ ...s.metaText, color: palette.gold }}>{meta.availability}</Text></View>
          </View>
        </View>

        <View style={s.section}>
          <SectionHeading title="Compétences" s={s} />
          {skills.map(({ category, items }) => (
            <View key={category} style={s.skillRow}>
              <Text style={s.skillCat}>{category}</Text>
              <View style={s.skillTags}>
                {items.map((item) => <Text key={item} style={s.tag}>{item}</Text>)}
              </View>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <SectionHeading title="Expérience" s={s} />
          {experiences.map((xp, i) => (
            <EntryRow key={`${xp.period}-${xp.company}`} entry={xp} isLast={i === experiences.length - 1} s={s} />
          ))}
        </View>

        <View style={s.section}>
          <SectionHeading title="Formation" s={s} />
          {education.map((edu, i) => (
            <EntryRow key={`${edu.period}-${edu.school}`} entry={edu} isLast={i === education.length - 1} s={s} />
          ))}
        </View>

        <View style={s.footer} fixed>
          <Text style={s.footerText}>{meta.name} · Curriculum Vitae</Text>
          <Text style={s.footerText} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>

      </Page>
    </Document>
  )
}

export default CvDocument
