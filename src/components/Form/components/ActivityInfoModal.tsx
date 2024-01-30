import React, { FC } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Flex,
	Text,
} from "@chakra-ui/react";
import { data } from "@/components/Form/data";

interface ActivityInfoModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ActivityInfoModal: FC<ActivityInfoModalProps> = ({ isOpen, onClose }) => (
	<Modal
		isOpen={isOpen}
		onClose={onClose}
		size={"2xl"}
	>
		<ModalOverlay />
		<ModalContent p={2}>
			<ModalHeader>Aktywności fizyczne</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				<Flex
					gap={2}
					direction="column"
				>
					{data.map(({ title, desc }) => (
						<Text key={title}>
							<Text
								color={"orange.400"}
								fontWeight="semibold"
								mr={1}
								my={1}
							>
								{title}
							</Text>
							{desc}
						</Text>
					))}
				</Flex>
			</ModalBody>

			<ModalFooter>
				<Button
					colorScheme="blue"
					onClick={onClose}
				>
					Zamknij
				</Button>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default ActivityInfoModal;
