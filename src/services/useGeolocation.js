import { useEffect, useState } from "react";

const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};
export const useGeolocation = () => {
	const [userLocation, setUserLocation] = useState("");

	const sucess = (position) => {
		const { coords } = position;
		// console.log(coords);
		setUserLocation(coords);
	};

	const error = (err) => {
		console.log(err);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(sucess, error, options);
	}, []);
	// console.log(userLocation);

	return [userLocation, setUserLocation];
};
