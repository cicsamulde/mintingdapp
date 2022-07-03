import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Mint Doodle Dick</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Doodle Dick is a trust-motivated project that aims to empower its holders by providing an amazing work of art NFTs. Our goal is to be recognized as a provider of quality NFT. The launching of Totoy ni Elon NFT was just the first step. Since the recognition of Totoy ni Elon among the NFT communities was established, we decided to evolve the idea and created, Doodle Dick."
        />
        <meta
          name="Doodle Dick, NFT, Metaverse, Cryptocurrency, Ethereum, Blockchain"
          content="Doodle Dick is a trust-motivated project that aims to empower its holders by providing an amazing work of art NFTs. Our goal is to be recognized as a provider of quality NFT. The launching of Totoy ni Elon NFT was just the first step. Since the recognition of Totoy ni Elon among the NFT communities was established, we decided to evolve the idea and created, Doodle Dick."
        />
      </Head>
      <Component {...pageProps} />
      
    </ThirdwebProvider>
  );
}

export default MyApp;
