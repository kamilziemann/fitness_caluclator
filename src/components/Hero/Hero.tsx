import { Flex, Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => (
	<Container maxW={"5xl"}>
		<Stack
			textAlign={"center"}
			align={"center"}
			spacing={{ base: 8, md: 10 }}
			py={{ base: 20, md: 28 }}
		>
			<Heading
				fontWeight={600}
				fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
				lineHeight={"110%"}
			>
				Wylicz już teraz swoje zapotrzebowanie
				<Text
					as={"span"}
					color={"orange.400"}
				>
					{" "}
					bardzo łatwo!
				</Text>
			</Heading>
			<Text
				color={"gray.500"}
				maxW={"3xl"}
			>
				Kalkulator zapotrzebowania kalorycznego pozwala dokładnie określić potrzebną liczbę kalorii dziennie. Prosty w
				użyciu, wystarczy podać kilka danych osobowych i poziomie aktywności fizycznej. Skorzystaj z niego aby lepiej
				planować dietę i osiągnąć swój cel związany z wagą.
			</Text>
			<Stack
				direction={"row"}
				wrap="wrap"
				justifyContent={"center"}
				gap={2}
			>
				<a href="#form">
					<Button
						rounded={"full"}
						px={6}
						colorScheme={"orange"}
						bg={"orange.400"}
						_hover={{ bg: "orange.500" }}
					>
						Wypróbuj już teraz
					</Button>
				</a>
				<Link
					href={"info"}
					scroll={false}
				>
					<Button
						rounded={"full"}
						px={6}
					>
						Dowiedz się więcej
					</Button>
				</Link>
			</Stack>
			<Flex
				w={"full"}
				position="relative"
				maxH={"lg"}
				h={"full"}
				minH="lg"
			>
				<Image
					src="/icons/FitnessIcon.svg"
					alt=""
					fill
				/>
			</Flex>
		</Stack>
	</Container>
);

export default Hero;
