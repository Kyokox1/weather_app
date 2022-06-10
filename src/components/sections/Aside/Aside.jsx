import {
	Box,
	Heading,
	HStack,
	IconButton,
	Image,
	Stack,
	Text
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { WeatherContext } from "../../../context/Context";

export const Aside = ({ tempCelsius, region, country, condition }) => {
	const { handleIconWeather } = useContext(WeatherContext);

	const imgWeather = handleIconWeather(condition);

	// ? Pone la primera Letra de cada oración en mayúscula.
	// skyDescription = skyDescription.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
	// 	letra.toUpperCase()
	// );

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
				<IconButton bgColor="brand.300" isRound="true"></IconButton>
			</HStack>
			<Stack flex="1" justify="space-around" color="brand.200">
				<Box pos="relative">
					<Box
						pos="absolute"
						top="0%"
						bottom="0"
						right="0%"
						left="0"
						bgImg="/assets/images/Cloud-background.png"
						bgRepeat="no-repeat"
						bgPos="center"
						bgSize="cover"
						filter="auto"
						opacity="10%"
					></Box>
					<Image src={imgWeather} m="0 auto" />
				</Box>
				<Heading
					as="h3"
					display="flex"
					alignItems="center"
					justifyContent="center"
					color="brand.100"
					fontSize="8xl"
					fontWeight="500"
				>
					{tempCelsius}
					<Box
						display="inline-block"
						as="span"
						fontWeight="400"
						fontSize="3xl"
						color="brand.200"
						ml="5px"
						mb="-10%"
					>
						°C
					</Box>
				</Heading>
				<Text fontWeight="600" fontSize="2xl">
					{condition}
				</Text>
				<Stack fontSize="sm">
					<Text>Today - Friday</Text>
					<Box padding={2} fontSize="sm" fontWeight="600">
						{region} - {country}
					</Box>
				</Stack>
			</Stack>
		</Stack>
	);
};
