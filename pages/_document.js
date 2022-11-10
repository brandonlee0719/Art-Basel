import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          {/* <link
            rel="stylesheet"
            data-href="https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700"
          /> */}

          <meta name="theme-color" content="#7000FF" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
