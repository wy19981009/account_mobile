module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
	rules: {
		"no-use-before-define": ["error", { functions: false, classes: false }],
		camelcase: "off",
	},
};
