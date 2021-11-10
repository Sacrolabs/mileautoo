import Layout from '../components/Layout'
import * as React from 'react'

// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
