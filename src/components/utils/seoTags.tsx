import { NextSeo } from "next-seo";

export default function SeoTags() {
  return (
    <>
      <NextSeo
        title="Polkadot Staking Calculator Reward (DOT)"
        description="Get the most out of your Polkadot staking with our efficient and distraction-free calculator. Calculate your rewards hassle-free with our easy-to-use tool."
        canonical="https://dot-staking-calculator.vercel.app/"
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "erickDevUP",
            keyOverride: "creator1",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://dot-staking-calculator.vercel.app/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://dot-staking-calculator.vercel.app/favicon.ico",
            sizes: "76x76",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Polkadot Staking Calculator Reward (DOT)",
          description:
            "Get the most out of your Polkadot staking with our efficient and distraction-free calculator. Calculate your rewards hassle-free with our easy-to-use tool.",
          images: [
            {
              url: "https://dot-staking-calculator.vercel.app/shot.png",
              width: 900,
              height: 800,
              alt: "Polkadot Staking Calculator Reward (DOT)",
              type: "image/png",
            },
          ],
          siteName: "Polkadot Staking Calculator Reward (DOT)",
        }}
        twitter={{
          handle: "@erickdevup",
          site: "https://dot-staking-calculator.vercel.app/",
          cardType: "summary_large_image",
        }}
      />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta
        name="keywords"
        content="Polkadot Staking Calculator,polkadot staking rewards  , Polkadot Staking Calculator Reward ,staking dot calculator,dot Staking Calculator  ,dot Staking Calculator Reward "
      />
      <meta
        name="copyright"
        content="Polkadot Staking Calculator Reward (DOT)"
      />
    </>
  );
}
