import React, { FC } from "react";
import { FormControl, FormLabel, HStack, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Field, FieldProps } from "formik";

const GenderRadioButtons: FC = () => (
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
						<RadioGroup
							{...rest}
							id={"gender"}
						>
							<Stack direction="row">
								<Radio
									value="male"
									onChange={onChange}
								>
									Mężczyzna
								</Radio>
								<Radio
									value="female"
									onChange={onChange}
								>
									Kobieta
								</Radio>
							</Stack>
						</RadioGroup>
					</FormControl>
				);
			}}
		</Field>
	</HStack>
);

export default GenderRadioButtons;
