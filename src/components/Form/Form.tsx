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
    FormErrorMessage,
    Slide,
    Container,
    SlideFade,
    ScaleFade,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { ViewIcon, ViewOffIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { data } from '@/components/Form/data';
import CustomNumberInput from '@/components/Form/components/CustomNumberInput/CustomNumberInput';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from "yup";
import { ActivityLevel, FormProps, Gender } from '@/types';
import calculateCaloricDemand from '@/helpers/calculateCaloricDemand';

export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('1');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const resultDisclosure = useDisclosure();
    // const handleSubmit = useCallback( (values) => {

    // }, [])
    const initialValues: Partial<FormProps> = {
        age: undefined,
        weight: undefined,
        height: undefined,
        activityLevel: 'none',
        gender: 'male',
    };

    return (
        <>
            <Button onClick={resultDisclosure.onClose}>AA</Button>
            <Formik
                initialValues={initialValues}
                // validationSchema={Yup.object().shape({
                //     email: Yup.string()
                //         .email()
                //         .required("Not an email")
                // })}
                onSubmit={(values) => {
                    console.log(values)
                    console.log(calculateCaloricDemand(values as FormProps));
                    resultDisclosure.onToggle();
                }}
            >
                <Form>

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
                                position='relative'
                            >
                                <Stack spacing={4}>
                                    <HStack>

                                        <Field name="gender">
                                            {({ field, form }: FieldProps) => {
                                                const { onChange, ...rest } = field;
                                                return (
                                                    <FormControl
                                                        id="gender"
                                                        isInvalid={!!form.errors["gender"] && !!form.touched["gender"]}
                                                    >
                                                        <FormLabel htmlFor="gender">Plec</FormLabel>
                                                        <RadioGroup {...rest} id={"gender"} >
                                                            <Stack direction='row'>
                                                                <Radio value='male' onChange={onChange}>Mężczyzna</Radio>
                                                                <Radio value='female' onChange={onChange}>Kobieta</Radio>
                                                            </Stack>
                                                        </RadioGroup>
                                                        {/* <FormErrorMessage>{form.errors?.["gender"]}</FormErrorMessage> */}
                                                    </FormControl>
                                                );
                                            }}
                                        </Field>
                                    </HStack>
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
                                    <Field name="activityLevel">
                                        {({ field, form }: FieldProps) => {
                                            const { onChange, ...rest } = field;
                                            return (
                                                <FormControl
                                                    id="activityLevel"
                                                    isInvalid={!!form.errors["activityLevel"] && !!form.touched["activityLevel"]}
                                                    isRequired
                                                >

                                                    <FormLabel>Aktywnosc fizyczna</FormLabel>
                                                    <HStack>
                                                        <Select variant='filled' onChange={field.onChange} value={field.value} >
                                                            {data.map(({ value, title }) => (
                                                                <option value={value} key={value}>
                                                                    {title}
                                                                </option>
                                                            ))}
                                                        </Select>
                                                        {/* <Tooltip
                                                            defaultIsOpen label='Kliknij tutaj aby dowiedzieć się więcej o aktywności fizycznej' placement='auto' maxW={"200px"} w="full" hasArrow arrowSize={10}>
                                                            <IconButton aria-label='Search database' onClick={onOpen} icon={<InfoOutlineIcon />} />
                                                        </Tooltip> */}

                                                    </HStack>
                                                </FormControl>
                                            );
                                        }}
                                    </Field>

                                    <Field name="purpose">
                                        {({ field, form }: FieldProps) => {
                                            const { onChange, ...rest } = field;
                                            //     <FormControl id="purpose" isRequired>
                                            //     <FormLabel>Cel diety</FormLabel>

                                            // </FormControl>
                                            return (
                                                <FormControl
                                                    id="purpose"
                                                    isInvalid={!!form.errors["purpose"] && !!form.touched["purpose"]}
                                                    isRequired
                                                >
                                                    <FormLabel>Cel diety</FormLabel>
                                                    <Select variant='filled' value={field.value} onChange={onChange}>
                                                        <option value='losing weight'>Schudnięcie</option>
                                                        <option value='weight maintenance'>Utrzymanie wagi</option>
                                                        <option value='arrival on the mass'>Przybycie na masie</option>
                                                    </Select>
                                                </FormControl>

                                            );
                                        }}
                                    </Field>;


                                    <Stack spacing={10} pt={2}>
                                        <Button
                                            type="submit"
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

                            {/* <SlideFade in={resultDisclosure.isOpen} style={{ zIndex: 10 }} offsetY={'1000px'}>
                                <ScaleFade initialScale={0.9} in={resultDisclosure.isOpen} >
                                    <Flex w='full' h='full' alignItems={'center'} justifyContent='center' position={'absolute'} top="0">
                                        <Box
                                            p='40px'
                                            color='white'
                                            mt='4'
                                            bg='teal.500'
                                            rounded='md'
                                            shadow='md'

                                        >
                                            aaaaaaaaaaa
                                        </Box>
                                    </Flex>
                                </ScaleFade>
                            </Container> */}
                        </Stack >



                    </Flex >
                </Form>
            </Formik>

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
