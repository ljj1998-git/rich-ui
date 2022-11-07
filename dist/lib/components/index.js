'use strict';

var icon = require('./icon');



Object.keys(icon).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return icon[k]; }
	});
});
