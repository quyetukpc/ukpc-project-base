const path = require("path");
module.exports = {
	webpack: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@configs": path.resolve(__dirname, "src/configs"),
			"@controllers": path.resolve(__dirname, "src/controllers"),
			"@helpers": path.resolve(__dirname, "src/helpers"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@i18n": path.resolve(__dirname, "src/i18n"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@layouts": path.resolve(__dirname, "src/layouts"),
		},
	},
};
