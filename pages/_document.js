import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { themeStorageKey } from '@lib/theme'
const bgVariableName = '--bg'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production'
    const initialProps = await Document.getInitialProps(ctx)
    // Pass isProduction flag back through props
    return { ...initialProps, isProduction }
  }

  render() {
    const { isProduction } = this.props
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#ffffff" />{' '}
          <meta
            name="google-site-verification"
            content="xBu6h2_OnbYaav5YIrtnN_4JdYBvEJoiTNrUB2JhDQM"
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function() {
                try {
                  var outdatedValue = localStorage.getItem('light-mode')

                  if (outdatedValue) {
                    localStorage.setItem('${themeStorageKey}', 'light')
                    localStorage.removeItem('light-mode')
                  }

                  var mode = localStorage.getItem('${themeStorageKey}')
                  if (!mode) return
                  document.documentElement.classList.add(mode)
                  var bgValue = getComputedStyle(document.documentElement)
                    .getPropertyValue('${bgVariableName}')
                  document.documentElement.style.background = bgValue
                } catch (e) {}
              })()`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
