import type { AppProps } from 'next/app'
import Router from "next/router"
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import "@/styles/globals.css"
export default function App({ Component, pageProps, router }: AppProps) {
  
    return (
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)} >
            <ChakraProvider>
                <Component {...pageProps} key={router.asPath} />
            </ChakraProvider>
        </AnimatePresence>
    )
}
