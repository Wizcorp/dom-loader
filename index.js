var loaderUtils = require('loader-utils');
var textTags = ['title', 'style', 'script'];


module.exports = function (str) {
	if (this.cacheable) {
		this.cacheable();
	}

	var query = loaderUtils.parseQuery(this.query);
	var tag = query.tag || 'div';
	var asText = query.asText || textTags.indexOf(tag) !== -1;

	var out = [str];
	out.push('var elm = document.createElement(' + JSON.stringify(tag) + ');');

	if (asText) {
		out.push('elm.appendChild(document.createTextNode(module.exports));');
	} else {
		out.push('elm.innerHTML = module.exports;');
	}

	out.push('module.exports = elm;');

	return out.join('\n');
};

