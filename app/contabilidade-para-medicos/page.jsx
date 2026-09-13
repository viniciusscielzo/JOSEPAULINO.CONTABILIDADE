'use client'

import { useEffect } from 'react'
import { medicalMarkup, initSite } from '../../src/site'

export default function ContabilidadeParaMedicos() {
  useEffect(() => initSite(), [])
  return <div dangerouslySetInnerHTML={{ __html: medicalMarkup }} />
}
