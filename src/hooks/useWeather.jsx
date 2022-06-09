import { getCurrentWeather } from "../services/getCurrentWeather";

export const useWeather = async (city) => {
	try {
		const data = await getCurrentWeather(city);
		console.log(data);
		const { main, name, visibility, wind, weather } = await data;
		const { humidity, pressure, temp } = await main;
		const sky = await weather[0].main;
		const skyDescription = await weather[0].description;
		const dataWeather = {
			name,
			visibility,
			wind,
			humidity,
			pressure,
			temp,
			sky,
			skyDescription
		};
		return dataWeather;
	} catch (error) {
		console.log(error);
	}
};
