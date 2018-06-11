# fis-parser-ymcLess
🔯 it is a plugin for fis1 translating less to css.

## install
```
npm i fis-parser-less-hh --save-dev
```

## usage
```
//fis-conf.js
fis.config.set('modules.parser.less', 'fis-parser-less-hh');
fis.config.set('roadmap.ext.less', 'css');
fis.config.merge({
	settings : {
		parser : {
			'fis-parser-less-hh' : {} //your less options here
		}
	}
});
```

## future
🕺it may be good passing less options with a file.

## reference

[the programmatic usage of less ———— written by less home](http://lesscss.org/usage/#programmatic-usage)

[the building of front-end developing envirenment ———— written by Yunlong Zhang](https://github.com/fouber/blog/issues/2)

