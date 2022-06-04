import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import { theme } from "./theme/theme";

import App from "./components/App";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</StrictMode>
);
