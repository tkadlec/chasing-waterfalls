const CleanCSS = require('clean-css');

module.exports = function(config) {
	config.addPassthroughCopy('site/img');
	config.addPassthroughCopy('site/fonts');
	config.addPassthroughCopy('site/sw.js');
	config.addPassthroughCopy('site/manifest.json');

	config.addFilter('cssmin', function(code) {
		return new CleanCSS({}).minify(code).styles;
	});

	let markdownIt = require("markdown-it");
	let markdownItDefList = require("markdown-it-deflist");
	let options = {
	  html: true,
	  linkify: true,
	  breaks: true
	};
	let markdownLib = markdownIt(options).use(markdownItDefList);
	
	config.setLibrary("md", markdownLib);

	return {
		dir: { input: 'site', output: 'dist', includes: '_includes' },
		passthroughFileCopy: true
	};
};