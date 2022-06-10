import { useEffect, useState } from "react";

export const useGeolocation = () => {
	const [location, setLocation] = useState({});

	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	const sucess = (position) => {
		const { coords } = position;
		setLocation(coords);
	};

	const error = (err) => {
		console.log(err);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(sucess, error, options);
	}, []);

	return location;
};
