const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
		"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
	}
};

export const getCurrentWeather = async ({ lat, long, city }) => {
	try {
		if (!lat || !long) {
			const response = await fetch(
				`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
				options
			);
			const data = await response.json();
			// console.log(data);
			return data;
		}

		if (!city) {
			const response = await fetch(
				`https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${long}`,
				options
			);
			const data = await response.json();
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

// -19.5676964 lat
// -65.7690572 long
