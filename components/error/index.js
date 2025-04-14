import Head from 'next/head'

import Page from '@components/page'
import Link from '@components/link'
import styles from './error.module.css'

const Error = ({ missingTerm, status }) => {
  return (
    <Page title={status || 'Error'} showSlug={false}>
      <Head>
        <title>{[status]}</title>
      </Head>

      {status === 404 ? (
        <>
          <h1>404</h1>
          <p>
            <strong>Whoops</strong> — wrong turn.
          </p>

          <Link legacyBehavior underline href="/">
            Go Home
          </Link>
        </>
      ) : (
        <section className={styles.section}>
          <span>{status || 'Sorry'}</span>
          <p>Something's up.</p>
        </section>
      )}
    </Page>
  )
}

export default Error
