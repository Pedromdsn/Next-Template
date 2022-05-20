import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-pt">
        <Head>
          <link
            rel="icon"
            type="image/icon"
            sizes="16x16"
            href="/favicon.ico"
          />
          <meta
            name="description"
            content="WebSite Description Change on _document.tsx"
          />
          <meta name="author" content="Pedromdsn" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=block"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
