import React from "react";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { motion, AnimationControls } from "framer-motion";

interface ResultDisplayProps {
	value: string;
	controls: AnimationControls;
	controlsHeading: AnimationControls;
	controlsResult: AnimationControls;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ value, controls, controlsHeading, controlsResult }) => {
	const handleBackButtonClick = () => {
		controls.start({
			x: 0,
			y: 0,
			rotate: 0,
			opacity: 1,
			pointerEvents: "auto",
		});
		controlsHeading.start({
			opacity: 1,
			display: "block",
		});
		controlsResult.start({
			opacity: 0,
			y: -10000,
			display: "none",
		});
	};

	return (
		<motion.div animate={controlsResult}>
			<Stack
				spacing={8}
				mx={"auto"}
				maxW={"lg"}
				w={"100%"}
				py={12}
				px={6}
			>
				<Stack align={"center"}>
					<Heading
						fontSize={"4xl"}
						textAlign={"center"}
					>
						Wynik
					</Heading>
				</Stack>

				<Box
					rounded={"lg"}
					bg={"white"}
					boxShadow={"lg"}
					p={8}
					position="relative"
				>
					<Stack spacing={4}>
						<Text
							fontSize={"lg"}
							color={"gray.600"}
						>
							{value} kcal
						</Text>
						<Button onClick={handleBackButtonClick}>Wróć do kalkulatora</Button>
					</Stack>
				</Box>
			</Stack>
		</motion.div>
	);
};

export default ResultDisplay;
