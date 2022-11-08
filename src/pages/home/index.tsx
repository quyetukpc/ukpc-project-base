import { useMsal } from "@azure/msal-react";
import { Loading } from "@components/layouts/Loading";
import { Container, Typography } from "@mui/material";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
	const { accounts } = useMsal();
	console.log(`accounts`, accounts);

	return (
		<Container>
			<Typography>HomePage</Typography>

			{Object.entries(accounts[0]).map(([key, value]) => {
				return (
					<Typography key={key}>
						{key}: {JSON.stringify(value)}
					</Typography>
				);
			})}
		</Container>
	);
};

export default HomePage;
