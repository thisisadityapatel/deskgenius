import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default function Document() {

  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="shortcut icon" href="companyLogo/deskgeniusLogo.png" />
        <title>DeskGenius</title>
      </Head>
      <body className="backgroundgrid">
        <Main />
        <NextScript />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
      </body>
    </Html>
  )
}
