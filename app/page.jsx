'use client'

import { useEffect } from 'react'
import { markup, initSite } from '../src/site'

export default function Home() {
  useEffect(() => initSite(), [])
  return <div dangerouslySetInnerHTML={{ __html: markup }} />
}
