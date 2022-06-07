import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme/theme";

import App from "./components/App";
import { WeatherProvider } from "./context/Context";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<WeatherProvider>
				<App />
			</WeatherProvider>
		</ChakraProvider>
	</StrictMode>
);
