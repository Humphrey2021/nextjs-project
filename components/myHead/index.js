import { useEffect } from 'react'
import Head from 'next/head'

export default function MyHead() {
  useEffect(() => {
    require('amfe-flexible')
  }, [])
  return (
    <Head>
      <meta name='renderer' content='webkit' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
      ></meta>
      <title>LBank Project</title>
    </Head>
  )
}
