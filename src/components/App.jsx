import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

import { Aside } from "./sections/Aside/Aside";
import { WeatherCards } from "./sections/WeatherCards/WeatherCards";
import { WeatherElements } from "./sections/WeatherElements/WeatherElements";

function App() {
	return (
		<Flex direction="row" h="100vh" color="brand.100">
			<Aside />
			{/* Main */}
			<Stack
				direction={"column"}
				as="main"
				flex="1"
				bgColor="brand.600"
				pt={6}
				px="5%"
			>
				{/* Farenheit, Celsius */}
				<Stack direction="row" as="header" justify="end">
					<Box
						as="button"
						borderRadius="50%"
						bgColor="brand.400"
						boxSize={10}
					>
						C
					</Box>
					<Box
						as="button"
						borderRadius="50%"
						bgColor="brand.400"
						boxSize={10}
					>
						F
					</Box>
				</Stack>
				{/* Weather Cards */}
				<WeatherCards />
				{/* Weather elements */}
				<WeatherElements />
			</Stack>
			{/* Main */}
		</Flex>
	);
}

export default App;
