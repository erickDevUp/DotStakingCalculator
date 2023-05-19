import SeoTags from "@/components/utils/seoTags";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SeoTags />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-C4JQG2K24N"
      ></Script>
      <Script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C4JQG2K24N');`}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
