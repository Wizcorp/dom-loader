var loaderUtils = require('loader-utils');
var textTags = ['title', 'style', 'script'];


module.exports = function (str) {
	if (this.cacheable) {
		this.cacheable();
	}

	var query = loaderUtils.parseQuery(this.query);
	var tag = query.tag || 'div';
	var asText = query.asText || textTags.indexOf(tag) !== -1;
	var attrs = query.attrs || [];

	var out = [str];
	out.push('var elm = document.createElement(' + JSON.stringify(tag) + ');');

	// extract attributes

	attrs.forEach(function (attr) {
		var colon = attr.indexOf(':');
		if (colon !== -1) {
			var name = attr.substring(0, colon);
			var value = attr.substring(colon + 1);

			out.push('elm.setAttribute(' + JSON.stringify(name) + ', ' + JSON.stringify(value) + ');');
		}
	});

	// set element body

	if (asText) {
		out.push('elm.appendChild(document.createTextNode(module.exports));');
	} else {
		out.push('elm.innerHTML = module.exports;');
	}

	// re-assign module.exports

	out.push('module.exports = elm;');

	return out.join('\n');
};

