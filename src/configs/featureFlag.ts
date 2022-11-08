export type FeatureName = "dashboard" | "report";

export type Role = "admin" | "region-manager";

export type FeatureOptions = {
	active: boolean;
	roles?: Role[];
};

export const featureFlags: Record<FeatureName, FeatureOptions> = {
	// Admin can using all feature without define role by default
	// If not define role, the feature will be available to all
	dashboard: {
		active: process.env.REACT_APP_DASHBOARD !== "false",
	},
	report: {
		active: process.env.REACT_APP_REPORT !== "false",
	},
};
