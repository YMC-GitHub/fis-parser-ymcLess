/*
 * hualei
 * https://github.com/YMC-GitHub
 */

'use strict';

var less = require('less');
var root = fis.project.getProjectPath();

module.exports = function(content, file, conf) {
	conf.paths = [file.dirname, root];
	if(conf.syncImport === undefined) conf.syncImport = true;
	if(conf.relativeUrls === undefined) conf.relativeUrls = true;
	less.render(content,conf)
			.then(function(output){
				if(output.imports){
					fis.util.map(output.imports, function(path) {
						file.cache.addDeps(path);
					});
				}
				content = output.css;
			},
			function(error){
				throw error;
			});
	return content;
};