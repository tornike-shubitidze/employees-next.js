import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Employees App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            src="https://kit.fontawesome.com/e6d6671b0b.js"
            crossorigin="anonymous"
          ></script>
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
