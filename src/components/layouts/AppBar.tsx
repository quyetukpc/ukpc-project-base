import { useMsal } from "@azure/msal-react";
import { Menu } from "@mui/icons-material";
import {
	Toolbar,
	AppBar as MuiAppBar,
	IconButton,
	Typography,
	Button,
} from "@mui/material";
import React from "react";
import { loginRequest } from "src/configs/msal";
import { AZURE_ID } from "src/helpers/axiosHelper";
import color from "src/theme/color";

type Props = {};

export default function AppBar({}: Props) {
	const { instance, accounts } = useMsal();

	const handleLogout = () => {
		instance
			.logoutRedirect({
				postLogoutRedirectUri: "/",
			})
			.then((res) => {
				sessionStorage.removeItem(AZURE_ID);
			});
	};

	return (
		<MuiAppBar
			position="static"
			sx={{ backgroundColor: color.darkPrimary }}
		>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<Menu />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					UKPC Project Demo
				</Typography>

				<Typography>{accounts[0].username}</Typography>
				<Button color="inherit" onClick={handleLogout}>
					Logout
				</Button>
			</Toolbar>
		</MuiAppBar>
	);
}
