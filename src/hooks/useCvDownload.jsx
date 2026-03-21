import { useState } from 'react'
import { pdf } from '@react-pdf/renderer'

export const useCvDownload = (theme) => {
  const [loading, setLoading] = useState(false)

  const download = async () => {
    if (loading) return
    setLoading(true)
    try {
      const { default: CvDocument } = await import('../cv/CvDocument')
      const blob = await pdf(<CvDocument theme={theme} />).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'CV_Yoann_Mazza.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } finally {
      setLoading(false)
    }
  }

  return { download, loading }
}
