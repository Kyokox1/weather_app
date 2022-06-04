import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { WeatherCardItem } from "./WeatherCardItem/WeatherCardItem";

export const WeatherCards = () => {
	return (
		<Flex direction="row" gap={5} justify="space-between">
			{Array(5)
				.fill("")
				.map((el, i) => (
					<WeatherCardItem key={i} />
				))}
		</Flex>
	);
};
