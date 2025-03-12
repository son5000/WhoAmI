import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" 
                rel="stylesheet" />
          {/* 한글 폰트: Noto Sans KR */}
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link 
            href="/images/Section/icon_light.png"
            rel="icon"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
