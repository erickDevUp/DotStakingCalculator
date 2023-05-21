import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

export default function NextSeoCard({}: Props) {
  return (
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
        url: "https://dot-staking-calculator.vercel.app/",
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
    />
  );
}
