import { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/getCurrentWeather";

export const useWeather = ({ lat = 19.5676964, long = 65.7690572, city }) => {
	const [weather, setWeather] = useState("");

	useEffect(() => {
		const loadData = async () => {
			try {
				const data = await getCurrentWeather({ lat, long, city });
				if (data) setWeather(data);
			} catch (error) {
				console.log(error);
			}
		};
		loadData();
	}, [lat, long, city]);

	return [weather, setWeather];
};

// -19.5676964 lat
// -65.7690572
