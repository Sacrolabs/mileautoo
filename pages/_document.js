import Document, { Html, Head, Main, NextScript } from 'next/document'

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
            
            {/* <link rel="stylesheet" href="./assets/css/quote.css"/>
            <link rel="stylesheet" href="./assets/css/about.css"/>
            <link rel="stylesheet" href="./assets/css/account.css"/>
            <link rel="stylesheet" href="./assets/css/chatbot.css"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
            
            {/* <script src="./assets/js/quote.js"></script>
            <script src="./assets/js/about.js"></script>
            <script src="./assets/js/account.js"></script>
            <script src="./assets/js/chatbot.js"></script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
