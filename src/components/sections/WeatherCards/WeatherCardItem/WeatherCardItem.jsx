import { Box, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const WeatherCardItem = () => {
	return (
		<Flex
			direction="column"
			bgColor="brand.500"
			flex="1"
			py={2}
			align="center"
			fontSize="sm"
		>
			<Text>Lun, 7 Jun</Text>
			<Image
				src="/public/assets/images/Sleet.png"
				h="70px"
				w="70px"
			/>
			<Flex justify="space-evenly" w="100%" pt={3}>
				<Text>16C</Text>
				<Text color="brand.200">11C</Text>{" "}
			</Flex>
		</Flex>
	);
};
