import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Stack,
	Text
} from "@chakra-ui/react";
import React from "react";

export const Aside = () => {
	return (
		<Stack
			as="aside"
			w="30vw"
			maxW={{ lg: "30vw", xl: "25vw" }}
			bgColor="brand.500"
			textAlign="center"
		>
			<HStack as="header" justify="space-between" p={6}>
				<Box
					as="button"
					fontSize="xs"
					bgColor="brand.300"
					p={2}
					borderRadius="sm"
					fontWeight="500"
				>
					Search for places
				</Box>
				<IconButton
					bgColor="brand.300"
					isRound="true"
				></IconButton>
			</HStack>
			<Stack flex="1" justify="space-around" color="brand.200">
				<Box pos="relative">
					<Box
						pos="absolute"
						top="0%"
						bottom="0"
						right="0%"
						left="0"
						bgImg="/public/assets/images/Cloud-background.png"
						bgRepeat="no-repeat"
						bgPos="center"
						bgSize="cover"
						filter="auto"
						opacity="10%"
					></Box>
					<Image src="/assets/images/Shower.png" m="0 auto" />
				</Box>
				<Heading
					as="h3"
					color="brand.100"
					fontSize="8xl"
					fontWeight="500"
				>
					15
					<Box
						as="span"
						fontWeight="400"
						fontSize="3xl"
						color="brand.200"
					>
						C
					</Box>
				</Heading>
				<Text fontWeight="600" fontSize="2xl">
					Shower
				</Text>
				<Stack fontSize="sm">
					<Text>Today - Friday</Text>
					<Button
						variant="unstyled"
						fontSize="sm"
						fontWeight="600"
					>
						Helsinki
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};
