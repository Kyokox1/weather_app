import React from "react";
import { Flex } from "@chakra-ui/react";

import { WeatherCardItem } from "./WeatherCardItem/WeatherCardItem";

export const WeatherCards = ({ forecastday }) => {
	return (
		<Flex direction="row" gap={5} justify="space-between">
			{!forecastday ? (
				<span>Loading...</span>
			) : (
				forecastday.map((forecast) => (
					<WeatherCardItem
						key={forecast.date}
						date={forecast.date}
						maxCelsius={forecast.day.maxtemp_c}
						minCelsius={forecast.day.mintemp_c}
						// icon={forecast.day.condition.icon}
						icon={forecast.day.condition.text}
					/>
				))
			)}
		</Flex>
	);
};
