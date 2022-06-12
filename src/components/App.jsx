// import React, { useContext } from "react";
import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import { Aside } from "./sections/Aside/Aside";
import { WeatherCards } from "./sections/WeatherCards/WeatherCards";
import { WeatherElements } from "./sections/WeatherElements/WeatherElements";
import { useWeather } from "../hooks/useWeather";
import { useGeolocation } from "../services/useGeolocation";

function App() {
	// const [initialCoords, setInitialCoords] = useState({});

	const [userLocation, setUserLocation] = useGeolocation();
	const { latitude, longitude } = userLocation;
	const [weather] = useWeather({ lat: latitude, long: longitude });

	// useEffect(() => {
	// 	setInitialCoords({ lat: latitude, long: longitude });
	// }, [userLocation]);
	// console.log(initialCoords);

	const { current, location } = weather;

	const humidity = current?.humidity;
	const pressure = current?.pressure_mb;
	const tempCelsius = current?.temp_c;
	const tempFarenheit = current?.temp_f;
	const wind = current?.wind_kph;
	const visibility = current?.vis_km;
	const condition = current?.condition.text;

	const region = location?.region;
	const country = location?.country;

	// console.log(tempFarenheit);
	// console.log(latitude, longitude);
	// console.log(weather);

	return (
		<Flex direction="row" h="100vh" color="brand.100">
			{/* Verificando si el objeto que trae weather esta vacio  */}
			{!weather ? (
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
