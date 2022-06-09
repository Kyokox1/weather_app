import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForescast } from "../../../hooks/useForescast";
import { WeatherCardItem } from "./WeatherCardItem/WeatherCardItem";

export const WeatherCards = () => {
	const [forescast, setForescast] = useState("");

	const city = "potosi";

	useEffect(() => {
		useForescast(city).then(setForescast);
	}, []);

	const forescastDay = forescast?.list?.[0];
	// const dateForescast = forescastDay?.dt;
	const date = forescastDay?.dt_txt;
	const dateForescast = date?.split(" ")?.[0];

	return (
		<Flex direction="row" gap={5} justify="space-between">
			{Array(5)
				.fill("")
				.map((el, i) => (
					<WeatherCardItem key={i} date={dateForescast} />
				))}
		</Flex>
	);
};
