import { getWeather } from "../services/getWeather";

export const useForescast = async (place) => {
	try {
		const data = await getWeather(place);
		const { list, city } = await data;
		const forescast = {
			city,
			list
		};
		return forescast;
	} catch (error) {
		console.log(error);
	}
};
