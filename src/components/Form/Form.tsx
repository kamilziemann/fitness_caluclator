import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    RadioGroup,
    Radio,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    InputRightAddon,
    Select,
    Tooltip,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { data } from '@/components/Form/data';



export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('1');
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Flex
                minH={'50vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} w={"100%"} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'} id="form">
                            Kalkulator diety
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            wylicz swoje zapotrzebowanie ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <HStack>
                                <FormControl id="plec" isRequired>
                                    <FormLabel>Płeć</FormLabel>
                                    <RadioGroup onChange={setValue} value={value}>
                                        <Stack direction='row'>
                                            <Radio value='1'>Mężczyzna</Radio>
                                            <Radio value='2'>Kobieta</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </FormControl>
                            </HStack>
                            <FormControl id="wiek" isRequired>
                                <FormLabel>Wiek</FormLabel>
                                <NumberInput
                                    max={100}
                                    min={18}
                                    keepWithinRange={false}
                                    clampValueOnBlur={false}
                                >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                            <FormControl id="waga" isRequired>
                                <FormLabel>Waga</FormLabel>
                                <NumberInput
                                    defaultValue={15}
                                    min={30}
                                    keepWithinRange={false}
                                    clampValueOnBlur={false}
                                >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                            <FormControl id="wzrost" isRequired>
                                <FormLabel>Wzrost</FormLabel>
                                <NumberInput
                                    defaultValue={15}
                                    min={30}
                                    keepWithinRange={false}
                                    clampValueOnBlur={false}
                                >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                            <FormControl id="aktywnosc" isRequired>

                                <FormLabel>Aktywnosc fizyczna</FormLabel>
                                <HStack>
                                    <Select variant='filled' placeholder='Wybierz aktywność fizyczną ' >
                                        {data.map(({ value, title }) => (
                                            <option value={value} key={value}>
                                                {title}
                                            </option>
                                        ))}
                                    </Select>
                                    <Tooltip
                                        defaultIsOpen label='Kliknij tutaj aby dowiedzieć się więcej o aktywności fizycznej' placement='auto' maxW={"200px"} w="full" hasArrow arrowSize={10}>
                                        <IconButton aria-label='Search database' onClick={onOpen} icon={<InfoOutlineIcon />} />
                                    </Tooltip>

                                </HStack>
                            </FormControl>
                            <FormControl id="cel" isRequired>
                                <FormLabel>Cel diety</FormLabel>
                                <Select variant='filled' placeholder='Wybierz cel swojej diety' >
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </FormControl>

                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Oblicz
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user? <Link color={'blue.400'}>Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack >



            </Flex >
            <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
                <ModalOverlay />
                <ModalContent p={2}>
                    <ModalHeader>Aktywności fizyczne</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex gap={2} direction="column">
                            {data.map(({ title, desc }) => (
                                <Text key={title}>
                                    <Text as="span" color={'blue.600'} fontWeight="semibold" mr={1}>
                                        {title}
                                    </Text>
                                    {desc}
                                </Text>
                            ))}
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' onClick={onClose}>
                            Zamknij
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


// 1,0 - "Brak aktywności fizycznej" - Osoba, która nie wykonuje żadnych regularnych ćwiczeń fizycznych, spędza większość czasu w pozycji siedzącej lub leżącej.
// 1,2 - "Niska aktywność fizyczna" - Osoba, która pracuje głównie w pozycji siedzącej, ale wykonuje nieznaczną ilość dodatkowej aktywności fizycznej.
// 1,4 - "Umiarkowana aktywność fizyczna" - Osoba, która pracuje głównie nie fizycznie i trenuje 2 razy w tygodniu.
// 1,6 - "Wysoka aktywność fizyczna" - Osoba, która pracuje lekko fizycznie i trenuje 3-4 razy w tygodniu.
// 1,8 - "Bardzo wysoka aktywność fizyczna" - Osoba, która pracuje ciężko fizycznie i trenuje 5 razy w tygodniu.
// 2,0 - "Ekstremalna aktywność fizyczna" - Osoba, która pracuje ciężko fizycznie i trenuje codziennie.

//   <FormControl>
//   <FormLabel>Amount</FormLabel>
//   <RadioGroup onChange={setValue} value={value}>
//       <Stack direction='row'>
//           <Radio value='1'>Mężczyzna</Radio>
//           <Radio value='2'>Kobieta</Radio>
//       </Stack>
//   </RadioGroup>
// </FormControl>
