const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
		"X-RapidAPI-Key": import.meta.env.VITE_API_KEY
	}
};

export const getCurrentWeather = async (city) => {
	try {
		const response = await fetch(
			`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`,
			options
		);
		const data = await response.json();
		// console.log(data)
		return data;
	} catch (error) {
		console.log(error);
	}
};
