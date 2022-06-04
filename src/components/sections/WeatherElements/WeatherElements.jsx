import {
	Box,
	Grid,
	GridItem,
	Heading,
	Stack,
	Text
} from "@chakra-ui/react";
import React from "react";

export const WeatherElements = () => {
	return (
		<Stack>
			<Heading as="h1" fontSize="2xl">
				Today's Highlights
			</Heading>
			<Grid gridTemplateColumns="repeat(2,1fr)" gap={7}>
				{Array(4)
					.fill("")
					.map((el, i) => (
						<GridItem
							key={i}
							display="flex"
							flexDir="column"
							alignItems="center"
							py={3}
							bgColor="brand.500"
						>
							<Text fontSize="sm">Air Pressure</Text>
							<Text fontSize="5xl" fontWeight="700">
								84{" "}
								<Text
									as="span"
									fontSize="2xl"
									fontWeight="500"
								>
									{" "}
									%
								</Text>
							</Text>
							<Box display={i <= 1 ? "block" : "none"}>
								asdasd
							</Box>
						</GridItem>
					))}
			</Grid>
		</Stack>
	);
};
