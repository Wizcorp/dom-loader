var loaderUtils = require('loader-utils');

module.exports = function (str) {
	if (this.cacheable) {
		this.cacheable();
	}

	var query = loaderUtils.parseQuery(this.query);
	var tagName = query.tag || 'div';

	var out = [str];
	out.push('var cnt = document.createElement(' + JSON.stringify(tagName) + ');');
	out.push('cnt.innerHTML = module.exports;');
	out.push('module.exports = cnt;');

	return out.join('\n');
};

