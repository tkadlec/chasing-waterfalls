const CleanCSS = require('clean-css');

module.exports = function(config) {
	config.addPassthroughCopy('site/img');
	config.addPassthroughCopy('site/fonts');

	config.addFilter('cssmin', function(code) {
		return new CleanCSS({}).minify(code).styles;
	});
	return {
		dir: { input: 'site', output: 'dist', includes: '_includes' },
		passthroughFileCopy: true
	};
};