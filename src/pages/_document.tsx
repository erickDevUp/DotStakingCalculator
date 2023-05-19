import SeoTags from "@/components/utils/seoTags";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SeoTags />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
