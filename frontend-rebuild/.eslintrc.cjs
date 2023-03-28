module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	overrides: [
		{
			files: ['*cjs'],
			options: {
				tabWidth: 2,
			}
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 0,
	},
};
