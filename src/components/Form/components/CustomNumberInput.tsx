import {
	FormControl,
	FormLabel,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputProps,
	NumberInputStepper,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { FC } from "react";

interface Props extends NumberInputProps {
	label: string;
}

const CustomNumberInput: FC<Props> = ({ label, ...props }) => {
	const formik = useFormikContext();
	const { value } = formik.getFieldProps(props.name);

	return (
		<FormControl
			id={props.id}
			isRequired
		>
			<FormLabel>{label}</FormLabel>
			<NumberInput
				value={value}
				onChange={formik.handleChange(props.name)}
				keepWithinRange={false}
				clampValueOnBlur={false}
				{...props}
			>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
		</FormControl>
	);
};

export default CustomNumberInput;
