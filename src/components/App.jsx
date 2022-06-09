// import React, { useContext } from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import { Aside } from "./sections/Aside/Aside";
import { WeatherCards } from "./sections/WeatherCards/WeatherCards";
import { WeatherElements } from "./sections/WeatherElements/WeatherElements";
import React, { useEffect, useState } from "react";
import { getWeather } from "../services/getWeather";
import { useWeather } from "../hooks/useWeather";

function App() {
	// const { weather } = useContext(WeatherContext);
	const [forescast, setForescast] = useState("");
	const [weather, setWeather] = useState("");

	const city = "potosi";

	useEffect(() => {
		useWeather(city).then(setWeather);
		getWeather(city).then(setForescast);
	}, []);
	// console.log(forescast);
	// const { humidity, name, pressure, temp, visibility, wind } = weather;
	const humidity = weather?.humidity;
	const name = weather?.name;
	const pressure = weather?.pressure;
	const temp = weather?.temp;
	const visibility = weather?.visibility;
	const wind = weather?.wind;
	const sky = weather?.sky;
	const skyDescription = weather?.skyDescription;

	return (
		<Flex direction="row" h="100vh" color="brand.100">
			{/* Verificando si el objeto que trae weather esta vacio  */}
			{!forescast || !weather ? (
				<Heading bgColor="brand.600">Loading....</Heading>
			) : (
				<>
					<Aside
						temp={temp}
						location={name}
						sky={sky}
						skyDescription={skyDescription}
					/>
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
						<WeatherElements
							humidity={humidity}
							pressure={pressure}
							wind={wind}
							visibility={visibility}
						/>
					</Stack>
				</>
			)}
			{/* Main */}
		</Flex>
	);
}

export default App;
