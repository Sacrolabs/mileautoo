import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            {/* <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
            {/* <title>Home</title> */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
            
           
        </Head>
        <body>
          <Main />
          <NextScript />
            
            {/* <Script src="./assets/js/quote.js"></Script>
            <Script src="./assets/js/about.js"></Script>
            <Script src="./assets/js/account.js"></Script>
            <Script src="./assets/js/chatbot.js"></Script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
