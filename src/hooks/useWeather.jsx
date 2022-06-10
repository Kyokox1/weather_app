/* eslint-disable camelcase */
import { getCurrentWeather } from "../services/getCurrentWeather";

export const useWeather = async ({ lat, long, city }) => {
	try {
		const data = await getCurrentWeather({ lat, long, city });
		const { current, location } = await data;
		const {
			humidity,
			temp_c,
			temp_f,
			pressure_mb,
			vis_km,
			wind_kph,
			last_updated,
			condition
		} = await current;
		// console.log(temp_c);

		const dataWeather = {
			humidity,
			temp_c,
			temp_f,
			pressure: pressure_mb,
			visibility: vis_km,
			wind: wind_kph,
			last_updated,
			condition,
			location
		};

		return dataWeather;
	} catch (error) {
		console.log(error);
	}
};
