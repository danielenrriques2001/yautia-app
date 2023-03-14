import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
        rel="stylesheet"
       />

      <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>

      <link
        rel='preload'
        href='/work-cat.jpg'
        as='image'
      />
      <link
        rel='preload'
        href='/long-break.jpg'
        as='image'
      />      

      <link
        rel='preload'
        href='/short-break.jpg'
        as='image'
      />


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
