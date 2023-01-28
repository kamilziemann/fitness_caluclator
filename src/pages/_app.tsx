import type { AppProps } from "next/app";
import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <ChakraProvider>
        <Head>
          <title>Kalkulator diety</title>
          <link rel="icon" href="/favicon.png"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Kalkulator diety" />
          <meta
            property="og:description"
            content="Wylicz już teraz swoje zapotrzebowanie bardzo łatwo!"
          />
          <meta property="og:image" content="/og_image.png" />
        </Head>
        <Component {...pageProps} key={router.asPath} />
      </ChakraProvider>
    </AnimatePresence>
  );
}
