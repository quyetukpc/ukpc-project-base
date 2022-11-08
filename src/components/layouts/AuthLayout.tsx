import { InteractionStatus } from "@azure/msal-browser";
import {
	AuthenticatedTemplate,
	UnauthenticatedTemplate,
	useMsal,
} from "@azure/msal-react";
import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import axiosInstant from "src/helpers/axiosHelper";
import { Loading } from "./Loading";
import UnAuth from "./UnAuth";
import WrapLayout from "./WrapLayout";

function ProtectedChild() {
	const { instance, inProgress, accounts } = useMsal();

	const getToken = async () => {
		try {
			console.log("Getting access token...");

			const accessTokenRequest = {
				scopes: ["user.read"],
				account: accounts[0],
			};

			const accessTokenResponse = await instance.acquireTokenSilent(
				accessTokenRequest
			);
			const _accessToken = accessTokenResponse.idToken;

			return _accessToken;
		} catch (error: any) {
			console.error(error);
			return Promise.reject(error);
		}
	};

	useLayoutEffect(() => {
		axiosInstant.interceptors.request.use(
			async (config: any) => {
				const token = await getToken();
				console.log(`_token`, token);
				config.headers!["Authorization"] = "Bearer " + token;
				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);

		axiosInstant.interceptors.response.use(
			(response) => response,
			(error) => {
				if (error.response.status === 401) {
					console.error("_error", error.response);
					// instance.acquireTokenRedirect(loginRequest);
				} else {
					// pushError(
					// 	error?.response?.data?.message ||
					// 		error.message ||
					// 		"Server error!"
					// );
					return Promise.reject(error);
				}
			}
		);
	}, []);

	if (inProgress !== InteractionStatus.None) {
		return <Loading />;
	}

	return (
		<WrapLayout>
			<Outlet />
		</WrapLayout>
	);
}

function AuthLayout() {
	const { instance, inProgress, accounts } = useMsal();

	if (inProgress !== InteractionStatus.None) {
		return <Loading />;
	}

	return (
		<div>
			<AuthenticatedTemplate>
				<ProtectedChild />
			</AuthenticatedTemplate>

			<UnauthenticatedTemplate>
				<UnAuth />
			</UnauthenticatedTemplate>
		</div>
	);
}

export default React.memo(AuthLayout);
