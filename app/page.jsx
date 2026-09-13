'use client'

import { useEffect } from 'react'
import { homeMarkup, initSite } from '../src/site'

export default function Home() {
  useEffect(() => initSite(), [])
  return <div dangerouslySetInnerHTML={{ __html: homeMarkup }} />
}
