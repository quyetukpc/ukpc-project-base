import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./configs/msal";
import { MsalProvider } from "@azure/msal-react";
import { I18nextProvider } from "react-i18next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import i18n from "@i18n/config";

export const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<ThemeProvider theme={theme}>
		<MsalProvider instance={msalInstance}>
			<I18nextProvider i18n={i18n}>
				<CssBaseline />
				<App />
			</I18nextProvider>
		</MsalProvider>
	</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
