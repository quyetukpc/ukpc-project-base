import { useMsal } from "@azure/msal-react";
import { Button, Container, Stack } from "@mui/material";
import { useEffect } from "react";
import { loginRequest } from "src/configs/msal";
import { Loading } from "./Loading";

type Props = {};

export default function UnAuth({}: Props) {
	const { instance } = useMsal();

	useEffect(() => {
		instance.loginRedirect(loginRequest).catch((e) => {
			console.error(e);
		});
	}, []);

	return (
		<div>
			<Loading />
		</div>
	);
}
