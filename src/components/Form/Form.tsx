import { Flex, Box, Stack, Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FC, useRef, useState } from "react";
import { Form as FormikForm, Formik } from "formik";
import { FormProps } from "@/types";
import calculateCaloricDemand from "@/helpers/calculateCaloricDemand";
import { motion, useAnimationControls, useInView, Variants } from "framer-motion";
import { useEffect } from "react";
import {
	FormHeader,
	GenderRadioButtons,
	ActivityLevelSelect,
	PurposeSelect,
	CustomNumberInput,
	ActivityInfoModal,
	ResultDisplay,
} from "./components";

const initialValues: Partial<FormProps> = {
	age: undefined,
	weight: undefined,
	height: undefined,
	activityLevel: "none",
	gender: "male",
	purpose: "losing weight",
};

const Form: FC = () => {
	const [value, setValue] = useState("");
	const [shouldDisplayTooltip, setShouldDisplayTooltip] = useState(false);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const resultDisclosure = useDisclosure({
		isOpen: false,
	});

	const boxRef = useRef(null);
	const timeoutRef = useRef<NodeJS.Timeout>();
	const timeoutRef2 = useRef<NodeJS.Timeout>();

	const isInView = useInView(boxRef, { once: true });

	const controls = useAnimationControls();
	const controlsHeading = useAnimationControls();
	const controlsResult = useAnimationControls();

	useEffect(() => {
		if (resultDisclosure.isOpen) {
			return;
		}

		if (isInView) {
			timeoutRef2.current = setTimeout(() => {
				setShouldDisplayTooltip(true);
			}, 500);
			timeoutRef.current = setTimeout(() => {
				setShouldDisplayTooltip(false);
			}, 3000);
		}

		return () => {
			clearTimeout(timeoutRef.current);
			clearTimeout(timeoutRef2.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

	useEffect(() => {
		controlsResult.set({
			opacity: 0,
			y: -10000,
			display: "none",
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					setValue(`${calculateCaloricDemand(values as FormProps)}`);
					resultDisclosure.onToggle();
					setShouldDisplayTooltip(false);

					controls.start({
						x: -100,
						y: 250,
						rotate: -10,
						opacity: 0.5,
						pointerEvents: "none",
					});

					controlsResult.start({
						opacity: 1,
						position: "absolute",
						x: "0",
						y: -150,
					});
				}}
			>
				<FormikForm>
					<Flex
						id="form"
						minH={"50vh"}
						align={"center"}
						justify={"center"}
						bg={useColorModeValue("gray.50", "gray.800")}
						position="relative"
						ref={boxRef}
					>
						<motion.div animate={controls}>
							<Stack
								spacing={8}
								mx={"auto"}
								maxW={"lg"}
								w={"100%"}
								py={12}
								px={6}
							>
								<motion.div animate={controlsHeading}>
									<FormHeader />
								</motion.div>
								<Box
									rounded={"lg"}
									bg={useColorModeValue("white", "gray.700")}
									boxShadow={"lg"}
									p={8}
									position="relative"
								>
									<Stack spacing={4}>
										<GenderRadioButtons />

										<CustomNumberInput
											id="age"
											label="Wiek"
											name="age"
											max={100}
											min={18}
										/>
										<CustomNumberInput
											id="weight"
											label="Waga"
											min={30}
											name="weight"
										/>
										<CustomNumberInput
											id="height"
											label="Wzrost"
											name="height"
											min={80}
										/>
										<ActivityLevelSelect
											resultDisclosure={resultDisclosure}
											shouldDisplayTooltip={shouldDisplayTooltip}
											isModalOpen={isOpen}
											onOpen={onOpen}
										/>
										<PurposeSelect />
										<Stack
											spacing={10}
											pt={2}
										>
											<Button
												type="submit"
												loadingText="Submitting"
												size="lg"
												rounded={"full"}
												px={6}
												colorScheme={"orange"}
												bg={"orange.400"}
												_hover={{ bg: "orange.500" }}
											>
												Oblicz
											</Button>
										</Stack>
									</Stack>
								</Box>
							</Stack>
						</motion.div>
						<ResultDisplay
							value={value}
							controls={controls}
							controlsHeading={controlsHeading}
							controlsResult={controlsResult}
						/>
					</Flex>
				</FormikForm>
			</Formik>

			<ActivityInfoModal
				onClose={onClose}
				isOpen={isOpen}
			/>
		</>
	);
};

export default Form;
