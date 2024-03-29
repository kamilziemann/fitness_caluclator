import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import { Container, Heading, Stack, Text, Button, Box } from "@chakra-ui/react";
import Link from "next/link";

const Home: NextPage = () => (
	<Layout>
		<Box
			position={"fixed"}
			p={2}
			w="full"
			bg="white"
			boxShadow={"sm"}
		>
			<Link href="/">
				<Button>Wróć do strony głównej</Button>
			</Link>
		</Box>
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
					Informacja
					<Text
						as={"span"}
						color={"orange.400"}
					></Text>
				</Heading>
				<Text
					color={"gray.500"}
					maxW={"3xl"}
					textAlign="left"
				>
					Kalkulator zapotrzebowania kalorycznego to narzędzie, które pozwala Ci dokładnie określić, ile kalorii
					potrzebujesz każdego dnia, aby utrzymać swoją wagę lub schudnąć. Dzięki niemu możesz lepiej planować swoją
					dietę i zwiększyć swoje szanse na osiągnięcie celu. Skorzystanie z kalkulatora jest proste i szybkie,
					wystarczy podać kilka podstawowych informacji, takie jak wiek, płeć, wzrost, wagę i poziom aktywności
					fizycznej, a następnie kalkulator wyliczy dla Ciebie dzienne zapotrzebowanie kaloryczne. To świetny sposób na
					to, aby lepiej kontrolować swoje odżywianie i osiągnąć swój cel związany z wagą. Skorzystaj z kalkulatora już
					dziś i zacznij odkrywać swoje zapotrzebowanie kaloryczne!
				</Text>
				<Text
					color={"gray.500"}
					maxW={"3xl"}
					textAlign="left"
				>
					Kalkulator zapotrzebowania kalorycznego oparty jest na wzorze <u>Harrisa-Benedicta</u>, który jest jednym z
					najpopularniejszych i najdokładniejszych sposobów określenia dziennego zapotrzebowania kalorycznego. Wzór ten
					uwzględnia czynniki takie jak płeć, wiek, wzrost, wagę oraz poziom aktywności fizycznej. Dzięki temu jest w
					stanie dokładnie określić ilość kalorii potrzebnych do utrzymania obecnej wagi lub do utraty lub przyrostu
					masy ciała. Skorzystanie z kalkulatora zapotrzebowania kalorycznego opartego na wzorze Harrisa-Benedicta
					pozwala na bardziej świadome planowanie diety i monitorowanie postępów w osiąganiu celów związanych z wagą.
				</Text>
				<Link href="/#form">
					<Button
						rounded={"full"}
						px={6}
						colorScheme={"orange"}
						bg={"orange.400"}
						_hover={{ bg: "orange.500" }}
					>
						Zabierz mnie do kalkulatora!
					</Button>
				</Link>
			</Stack>
		</Container>
	</Layout>
);

export default Home;

