import React, { FC } from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

const FormHeader: FC = () => (
	<Stack align={"center"}>
		<Heading
			fontSize={"4xl"}
			textAlign={"center"}
		>
			Kalkulator diety
		</Heading>
		<Text
			fontSize={"lg"}
			color={"gray.600"}
		>
			wylicz swoje zapotrzebowanie ✌️
		</Text>
	</Stack>
);

export default FormHeader;
