import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const WeatherElements = ({ humidity, wind, visibility, pressure }) => {
	const weatherParameters = [
		{ name: "Wind status", value: wind, unit: "km/h" },
		{ name: "Humidity", value: humidity, unit: "%" },
		{ name: "Visibility", value: visibility, unit: "km" },
		{ name: "Air Pressure", value: pressure, unit: "mb" }
	];

	return (
		<Stack>
			<Heading as="h1" fontSize="2xl">
				{`Today's Highlights`}
			</Heading>
			<Grid gridTemplateColumns="repeat(2,1fr)" gap={7}>
				{weatherParameters.map((parameter, i) => (
					<GridItem
						key={i}
						display="flex"
						flexDir="column"
						alignItems="center"
						py={3}
						bgColor="brand.500"
					>
						<Text fontSize="sm">{parameter.name}</Text>
						<Text fontSize="5xl" fontWeight="700">
							{parameter.value}{" "}
							<Text as="span" fontSize="2xl" fontWeight="500">
								{" "}
								{parameter.unit}
							</Text>
						</Text>
						<Box display={i <= 1 ? "block" : "none"}>asdasd</Box>
					</GridItem>
				))}
			</Grid>
		</Stack>
	);
};
