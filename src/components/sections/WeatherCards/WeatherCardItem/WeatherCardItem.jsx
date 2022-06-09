import { Flex, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";

export const WeatherCardItem = ({ date }) => {
	const dateForescast = dayjs(date).format("ddd, D  MMM");
	// const dateForescast = dayjs.unix(date).format("ddd, D  MMM");
	return (
		<Flex
			direction="column"
			bgColor="brand.500"
			flex="1"
			py={2}
			align="center"
			fontSize="sm"
		>
			<Text>{dateForescast}</Text>
			<Image src="/assets/images/Sleet.png" h="70px" w="70px" />
			<Flex justify="space-evenly" w="100%" pt={3}>
				<Text>16C</Text>
				<Text color="brand.200">11C</Text>{" "}
			</Flex>
		</Flex>
	);
};
