import { motion } from "framer-motion";
import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
	<>
		<Head>
			<title>Fitness Calculator</title>
			<meta
				name="description"
				content="Kalkulator zapotrzebowania kalorii"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link
				rel="icon"
				href="/favicon.ico"
			/>
		</Head>
		<motion.div
			layoutScroll
			initial={{ x: 500, opacity: 0, overflow: "auto" }}
			animate={{ x: 0, opacity: 1, overflow: "hidden" }}
			exit={{ x: 500, opacity: 0, overflow: "auto" }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20,
			}}
		>
			{children}
		</motion.div>
	</>
);
export default Layout;
