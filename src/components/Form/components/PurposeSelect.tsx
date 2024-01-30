import React, { FC } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { Field, FieldProps } from "formik";

const PURPOSE_OPTIONS = [
	{ value: "losing weight", label: "Schudnięcie" },
	{ value: "weight maintenance", label: "Utrzymanie wagi" },
	{ value: "arrival on the mass", label: "Przybycie na masie" },
];

const PurposeSelect: FC = () => (
	<Field name="purpose">
		{({ field, form }: FieldProps) => (
			<FormControl
				id="purpose"
				isInvalid={!!form.errors["purpose"] && !!form.touched["purpose"]}
				isRequired
			>
				<FormLabel>Cel diety</FormLabel>
				<Select
					variant="filled"
					value={field.value}
					onChange={field.onChange}
				>
					{PURPOSE_OPTIONS.map(({ value, label }) => (
						<option
							value={value}
							key={value}
						>
							{label}
						</option>
					))}
				</Select>
			</FormControl>
		)}
	</Field>
);

export default PurposeSelect;
