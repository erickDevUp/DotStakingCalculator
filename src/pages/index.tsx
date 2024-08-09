import Container from "@/components/container";
import ImputReward from "@/components/inputReward";
import ImputMont from "@/components/inputMont";
import CheckBox from "@/components/utils/checkBox";
import Reward from "@/components/reward";
import { CheckRest } from "@/context/checkCtx";
import { useState } from "react";
import Calculate from "@/components/calculate";
import NextSeoCard from "../components/utils/nextSeo";
import ModalAd from "@/components/ModalAd";

export default function Home({ price }: any) {
  const [calculate, setCalculate] = useState();

  const getConversionPrice = (num: number) => {
    const conversion = Number(num / price.polkadot.usd).toFixed(2);
    return conversion;
  };

  return (
    <>
      <NextSeoCard></NextSeoCard>
      <CheckRest>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-blue-100">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/Logo.png"
              alt="Polkadot Staking Calculator Logo"
              loading="lazy"
            />
            <h1 className="mt-5 text-center text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Polkadot Staking Calculator (DOT)
            </h1>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6 px-6 max-sm:px-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <Container>
                  <CheckBox></CheckBox>
                </Container>
                <Container>
                  <ImputReward />
                  <ImputMont getConversionPrice={getConversionPrice} />
                </Container>
              </div>
              <div>
                <Calculate setCalculate={setCalculate}></Calculate>
              </div>
            </form>
            {calculate && (
              <div className="my-10 divide-x-2 bg-slate-300 h-[1px]"></div>
            )}
            {calculate && (
              <>
                <Reward
                  calculate={calculate}
                  getConversionPrice={getConversionPrice}
                ></Reward>
                <ModalAd />
              </>
            )}
          </div>
        </div>
      </CheckRest>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd"
  );
  const price = await res.json();

  return {
    props: {
      price,
    },
    revalidate: 3600,
  };
}
