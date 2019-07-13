
//-------------------
// 项目配置
//-------------------
//名字
fis.config.set('name', 'proj');
//版本
fis.config.set('version', '1.0.1');

//-------------------
// 系统配置
//-------------------
fis.config.merge({
    project : {
        include : 'test.less'
    }
});


//-------------------
// 流程配置
//-------------------
//1.配置单文件编译流程
//1.2 文件解析处理
var lessParser = require('../index.js');
fis.config.set('modules.parser.less', lessParser);
fis.config.set('roadmap.ext.less', 'css');

//1.3 文件的预处理
//fis.config.set('modules.preprocessor.css', 'image-set');

//1.4 文件标准处理
//fis.config.set('modules.postprocessor.js', 'jswrapper');

//1.5 文件的后处理
/*
var commomJSfy = function(content, file){
  //只对模块化js文件进行包装
  //项目模块化资源||外部模块(组件仓库)
  if(file.isComponents || file.isComponentModules){
      content = 'define("' + file.id +
                '", function(require,exports,module){' +
                content + '});';
  }
  return content;
}
fis.config.set('modules.postprocessor.js', commomJSfy);
*/
//1.6 文件校验处理
//fis.config.set('modules.lint.js', 'jshint');

//1.7 文件测试处理
//fis.config.set('modules.test.js', 'phantomjs');

//1.8 文件优化处理
//fis.config.set('modules.optimizer.js', 'uglify-js');
//fis.config.set('modules.optimizer.html', 'html-minifier');
//fis.config.set('modules.optimizer.css', 'clean-css');
//fis.config.set('modules.optimizer.png', 'png-compressor');
//fis.config.set('modules.optimizer.html', 'html-minifier');

//1.9 设置插件选项
//fis.config.set('settings.optimizer.uglify-js.output.max_line_len', 500);
//fis.config.set('settings.optimizer.uglify-js.output.ascii_only', true);
//fis.config.set('settings.optimizer.clean-css.keepBreaks', true);
//fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');
//fis.config.set('settings.postprocessor.jswrapper.template', 'try{ ${content} }catch(e){e.message+="${id}";throw e;}');
fis.config.merge({
	settings : {
		parser : {
			'fis-parser-less-hh' : {'math':true} //your less options here
		}
	}
});
//2.配置多文件打包流程
//2.1 文件在打包前的处理
//fis.config.set('modules.prepackager', 'oo, xx');
//说明：不管调用fis release命令时是否使用 --pack 参数，该插件均会被调用。


//2.2 文件在打包时的处理
//fis.config.set('modules.packager', 'map');
//说明:调用fis release命令时，添加 --pack 参数，该插件才会被调用。

//2.3 文件在打包后的处理
//fis.config.set('modules.postpackager', 'xx');
//说明：不管调用fis release命令时是否使用 --pack 参数，该插件均会被调用。
/**
 *
 * @param {*} ret 资源 {src,pkg,map}
 * @param {*} conf 配置
 * @param {*} settings 设置
 * @param {*} opt 选项
 */
/*
var createFrameworkConfig = function(ret, conf, settings, opt){
    var map = {};
    //依赖收集表
    map.deps = {};
    //别名收集表
    map.alias = {};
    //合并收集表
    //map.pkgs
    fis.util.map(ret.src, function(subpath, file){
        if(file.isComponents || file.isComponentModules){
            //判断一下文件名和文件夹是否同名，如果同名则建立一个别名
            var match = subpath.match(/^\/components\/(.*?([^\/]+))\/\2\.js$/i);
            if(match && match[1] && !map.alias.hasOwnProperty(match[1])){
                map.alias[match[1]] = file.id;
            }
            //写入依赖表
            if(file.requires && file.requires.length){
                map.deps[file.id] = file.requires;
            }
        }
    });
    var stringify = JSON.stringify(map, null, opt.optimize ? null : 4);
    fis.util.map(ret.src, function(subpath, file){
        //依赖树数据注入js、html文件
        if(file.isViews && (file.isJsLike || file.isHtmlLike)){
            var content = file.getContent();
            content = content.replace(/\b__FRAMEWORK_CONFIG__\b/g, stringify);
            file.setContent(content);
        }
    });

};
fis.config.set('modules.postpackager', [createFrameworkConfig]);
*/
//2.4 文件打包图片精灵
//阶段命名规则：modules.csssprite
//插件命名规则：fis-spriter-csssprites
//fis.config.set('modules.csssprite', 'csssprites');
//说明：调用fis release命令时，添加 --pack 参数，该插件才会被调用。



