import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";

const App = ({ Component, pageProps, router }: AppProps) => (
	<AnimatePresence
		mode="wait"
		initial={false}
		onExitComplete={() => window.scrollTo(0, 0)}
	>
		<ChakraProvider>
			<Component
				{...pageProps}
				key={router.asPath}
			/>
			<Analytics />
		</ChakraProvider>
	</AnimatePresence>
);

export default App;
