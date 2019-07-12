# fis-parser-ymcLess
🔯 it is a plugin for fis1 translating less to css.

![Travis (.com) branch](https://img.shields.io/travis/com/ymc-github/fis-parser-ymcLess/master.svg?label=Travis%20CI&color=ff69b4&logo=Travis%20CI&logoColor=ff69b4&style=popout-square)
![GitHub repo size](https://img.shields.io/github/repo-size/ymc-github/fis-parser-ymcLess.svg?label=github%20repo%20size&color=ff69b4&logo=Github&logoColor=ff69b4&style=popout-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ymc-github/fis-parser-ymcLess.svg?color=ff69b4&logo=Github&logoColor=ff69b4&style=popout-square)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ymc-github/fis-parser-ymcLess/master.svg?label=github%20last%20commit%40master&color=ff69b4&logo=Github&logoColor=ff69b4&style=popout-square)
![Gitter](https://img.shields.io/gitter/room/ymc-github/fis-parser-ymcLess.svg?label=chat&color=ff69b4&logo=Github&logoColor=ff69b4&style=popout-square)
![GitHub language count](https://img.shields.io/github/languages/count/ymc-github/fis-parser-ymcLess.svg?label=languages&color=ff69b4&logo=Github&logoColor=ff69b4&style=popout-square)
![GitHub language top](https://img.shields.io/github/languages/top/ymc-github/fis-parser-ymcLess.svg?color=ff69b4&logo=Github&logoColor=ff69b4&style=popout-square)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/ymc-github/fis-parser-ymcLess/master.svg?label=github%20package.json%20version%40master&color=ff69b4&logo=Github&logoColor=ff69b4&style=popout-square)
![GitHub followers](https://img.shields.io/github/followers/ymc-github.svg?label=github%20followers&color=ff69b4&logo=Github&logoColor=ff69b4&style=popout-square)
![Twitter Follow](https://img.shields.io/twitter/follow/yemiancheng.svg?label=follow%20%40yemiancheng&color=ff69b4&logo=Twitter&logoColor=ff69b4&style=popout-square)

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

[the programmatic usage of less -- written by less home](http://lesscss.org/usage/#programmatic-usage)

[the building of front-end developing envirenment -- written by Yunlong Zhang](https://github.com/fouber/blog/issues/2)

