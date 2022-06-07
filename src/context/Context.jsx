import React, { createContext, useEffect, useState } from "react";
import { getSearch } from "../services/getSearch";
import { getWeather } from "../services/getWeather";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const [weather, setWeather] = useState([]);
	const [cities, setCities] = useState([]);

	useEffect(() => {
		getWeather().then(setWeather);
		getSearch("bolivia").then(setCities);
	}, []);

	return (
		<WeatherContext.Provider value={{ weather, cities }}>
			{children}
		</WeatherContext.Provider>
	);
};
