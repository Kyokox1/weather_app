// import React, { useContext } from "react";
import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import { Aside } from "./sections/Aside/Aside";
import { WeatherCards } from "./sections/WeatherCards/WeatherCards";
import { WeatherElements } from "./sections/WeatherElements/WeatherElements";

import { getWeather } from "../services/getWeather";
import { useGeolocation } from "../services/useGeolocation";
import { useWeather } from "../hooks/useWeather";

function App() {
	// const { weather } = useContext(WeatherContext);
	const [forescast, setForescast] = useState("");
	const [weather, setWeather] = useState("");
	// const [coords, setCoords] = useState({});

	const { latitude, longitude } = useGeolocation();

	let city = null;
	if (!latitude || !longitude) city = "argentina";

	useEffect(() => {
		useWeather({ lat: latitude, long: longitude, city }).then(setWeather);
		getWeather(city).then(setForescast);
	}, [latitude, longitude]);

	// useEffect(() => {
	// setCoords({ latitude, longitude });
	// }, [latitude, longitude]);

	const humidity = weather?.humidity;
	const region = weather?.location?.region;
	const country = weather?.location?.country;
	const pressure = weather?.pressure;
	const tempCelsius = weather?.temp_c;
	const tempFarenheit = weather?.temp_f;
	const visibility = weather?.visibility;
	const wind = weather?.wind;
	const condition = weather?.condition?.text;
	// console.log(wind);

	return (
		<Flex direction="row" h="100vh" color="brand.100">
			{/* Verificando si el objeto que trae weather esta vacio  */}
			{!forescast || !weather ? (
				<Heading bgColor="brand.600">Loading....</Heading>
			) : (
				<>
					<Aside
						tempCelsius={tempCelsius}
						tempFarenheit={tempFarenheit}
						region={region}
						country={country}
						condition={condition}
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
