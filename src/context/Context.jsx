import React, { createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const handleIconWeather = (icon) => {
		if (icon === "Clear") return "/assets/images/Clear.png";
		if (icon === "Hail") return "/assets/images/Hail.png";
		if (icon === "Clouds") return "/assets/images/HeavyCloud.png";
		if (icon === "HeavyRain" || icon === "Rain")
			return "/assets/images/HeavyRain.png";
		if (icon === "LightCloud") return "/assets/images/LightCloud.png";
		if (icon === "LightRain") return "/assets/images/LightRain.png";
		if (icon === "Shower") return "/assets/images/Shower.png";
		if (icon === "Sleet") return "/assets/images/Sleet.png";
		if (icon === "Snow") return "/assets/images/Snow.png";
		if (icon === "Thunderstorm") return "/assets/images/Thunderstorm.png";
	};

	return (
		<WeatherContext.Provider value={{ handleIconWeather }}>
			{children}
		</WeatherContext.Provider>
	);
};
