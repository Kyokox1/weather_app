import React, { useContext } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";

import { WeatherContext } from "../../../../context/Context";

export const WeatherCardItem = ({ date, maxCelsius, minCelsius, icon }) => {
	// ? Formatear fecha
	const dateForescast = dayjs(date).format("ddd, D  MMM");
	// const dateForescast = dayjs.unix(date).format("ddd, D  MMM");

	// ? Usar iconos
	const { handleIconWeather } = useContext(WeatherContext);
	const imgWeather = handleIconWeather(icon);

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
			<Image src={imgWeather} h="70px" w="70px" />
			<Flex justify="space-evenly" w="100%" pt={3}>
				<Text>{maxCelsius}C</Text>
				<Text color="brand.200">{minCelsius}C</Text>{" "}
			</Flex>
		</Flex>
	);
};
