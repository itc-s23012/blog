import Head from 'next/head'
import { siteMeta } from 'lib/constants'
const { siteTitle } = siteMeta

const Meta = ({ pageTitle }) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={`${pageTitle} | ${siteTitle}`} />
    </Head>
  )
}

export default Meta
