import React, { FC } from "react";
import { FormControl, FormLabel, HStack, IconButton, Select, Tooltip, UseDisclosureProps } from "@chakra-ui/react";
import { Field, FieldProps } from "formik";
import { data } from "@/components/Form/data";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface Props {
	resultDisclosure: UseDisclosureProps;
	shouldDisplayTooltip: boolean;
	isModalOpen: boolean;
	onOpen: () => void;
}

const ActivityLevelSelect: FC<Props> = ({ resultDisclosure, shouldDisplayTooltip, isModalOpen, onOpen }) => (
	<Field name="activityLevel">
		{({ field, form }: FieldProps) => (
			<FormControl
				id="activityLevel"
				isInvalid={!!form.errors["activityLevel"] && !!form.touched["activityLevel"]}
				isRequired
			>
				<FormLabel>Aktywność fizyczna</FormLabel>
				<HStack>
					<Select
						variant="filled"
						onChange={field.onChange}
						value={field.value}
					>
						{data.map(({ value, title }) => (
							<option
								value={value}
								key={value}
							>
								{title}
							</option>
						))}
					</Select>

					<Tooltip
						isOpen={resultDisclosure.isOpen === true ? false : shouldDisplayTooltip}
						isDisabled={resultDisclosure.isOpen}
						display={isModalOpen ? "none" : undefined}
						label="Kliknij tutaj aby dowiedzieć się więcej o aktywności fizycznej"
						placement="bottom-end"
						maxW={"200px"}
						w="full"
						hasArrow
						arrowSize={10}
					>
						<IconButton
							aria-label="Search database"
							onClick={onOpen}
							icon={<InfoOutlineIcon />}
						/>
					</Tooltip>
				</HStack>
			</FormControl>
		)}
	</Field>
);

export default ActivityLevelSelect;
