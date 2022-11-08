import { FeatureName } from "@configs";
import HomePage from "@pages/home";
import ReportPage from "@pages/report";
import { Navigate, RouteObject } from "react-router-dom";

export type AppRoute = Omit<RouteObject, "children"> & {
	flagName?: FeatureName;
	children?: AppRoute[];
};

export const protectRoutes: AppRoute[] = [
	{
		index: true,
		path: "dashboard",
		element: <HomePage />,
		flagName: "dashboard",
	},
	{
		path: "report",
		element: <ReportPage />,
		flagName: "report",
	},
	{
		path: "",
		element: <Navigate to="dashboard" />,
	},
];
