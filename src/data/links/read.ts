interface OptionValue {
  label: string
  value: string
  title?: string
  tags?: any
}

export const Read: Array<OptionValue> = [
  {
    label: '奇舞周刊',
    value: 'https://weekly.75team.com/',
    title: '360出品'
  },
  {
    label: '冴羽博客',
    value: 'https://github.com/mqyqingfeng/Blog'
  },
  {
    label: '阮一峰',
    value: 'http://www.ruanyifeng.com/blog/'
  },
  {
    label: '小胡子哥',
    value: 'http://www.barretlee.com/entry/',
    title: '',
    tags: ['博客']
  },
  {
    label: '张鑫旭',
    value: 'https://www.zhangxinxu.com/wordpress/category/js/'
  },
  {
    label: 'Dan Abramov 博客',
    value: 'https://overreacted.io/'
  },
  {
    label: 'Medium',
    value: 'https://medium.com/'
  },
  {
    label: '人人都是产品经理',
    value: 'http://www.woshipm.com/'
  },
  {
    label: '王垠的博客',
    value: 'http://www.yinwang.org/'
  },
  {
    label: 'Infoq',
    value: 'https://www.infoq.cn/'
  }
]

export const JavaScript: Array<OptionValue> = [
  {
    label: '30-seconds-of-code',
    value: 'https://github.com/30-seconds/30-seconds-of-code',
    title: '短小精悍的工具函数，有中文版'
  },
  {
    label: 'Front-End-Checklist',
    value: 'https://github.com/thedaviddias/Front-End-Checklist',
    title: '前端开发清单'
  },
  {
    label: 'javascript-algorithms',
    value: 'https://github.com/trekhleb/javascript-algorithms',
    title: 'js算法和数据结构'
  },
  {
    label: '33-js-concepts',
    value: 'https://github.com/leonardomso/33-js-concepts',
    title: '前端开发需要掌握的33个概念，有中文版'
  },
  {
    label: 'awesome-javascript',
    value: 'https://github.com/sorrycc/awesome-javascript',
    title: 'javascript资源列表，有中文版'
  },
  {
    label: 'JavaScript Promise迷你书（中文版）',
    value: 'http://liubin.org/promises-book/'
  },
  {
    label: 'plainJS - The Vanilla JavaScript Repository',
    value: 'https://plainjs.com/',
    title: '该仓库都是用原生js写的插件和组件，很实用',
    tags: ['工具', '插件', '组件']
  },
  {
    label: 'JSFuck',
    value: 'http://www.jsfuck.com/',
    title:
      '是用匿名函数的原生形式，解码则按照编码原理倒过来写个程序。其特点是由“[]，()，{}，+,！”组成的编码后的字符，这是一个JavaScript的绕过代码编码方式。',
    tags: ['工具']
  },
  {
    label: 'ECMAScript 6入门',
    value: 'http://es6.ruanyifeng.com/',
    title: '阮一峰出品',
    tags: ['文档']
  }
]

export const Css: Array<OptionValue> = [
  {
    label: 'css渐变预览及代码生成',
    value: 'https://www.html.cn/tool/css3Preview/Box-Shadow.html'
  },
  {
    label: 'LoadersCSS',
    value: 'https://connoratherton.com/loaders',
    title:
      '用 CSS 技术实现 loading 动画； 补一句，想熟悉、理解 `keyframes、animation、transform、transition`的童鞋可以直接去读其源码(只有千把行代码)，读完就算出师鸟:)',
    tags: ['CSS']
  },
  {
    label: 'css动画缓动函数预览及生成',
    value: 'http://xuanfengge.com/easeing/ceaser/'
  },
  {
    label: '多张图片合成雪碧图，并生成对应css',
    value: 'https://www.toptal.com/developers/css/sprite-generator'
  },
  {
    label: 'Normalize.css',
    title:
      'Normalize是一个相对平和的css reset方案，注重通用的方案，保留有用的user agent 样式',
    value: 'http://necolas.github.io/normalize.css/',
    tags: ['CSS']
  },
  {
    label: 'Bootstrap库',
    value: 'http://getbootstrap.com/',
    title:
      'Bootstrap是快速开发Web应用程序的前端工具包，它是一个CSS和HTML的集合，它使用了最新的浏览器技术，给你的Web开发提供了时尚的版式',
    tags: ['UI框架']
  },
  {
    label: 'bulma库',
    value: 'http://bulma.io/',
    title: 'A modern CSS framework based on Flexbox',
    tags: ['css']
  },
  {
    label: 'pure库',
    value: 'http://purecss.io/',
    title:
      'Pure是来自雅虎的CSS框架，框架基于响应式设计，提供多种样式的组件，包括表格、表单、按钮、表、导航等',
    tags: ['UI框架']
  },
  {
    label: 'MetroUI库',
    value: 'http://metroui.org.ua/',
    title: 'MetroUI CSS 是一套实现了Windows8 Metro风格界面的CSS框架',
    tags: ['UI框架']
  },
  {
    label: 'Maxmertkit库',
    value: 'http://www.maxmert.com/',
    title:
      'Maxmertkit是一个全新的前端框架，拥有类似boostrap的UI但是提供了不同的组件内容',
    tags: ['UI框架']
  },
  {
    label: 'uix-kit库',
    value: 'https://github.com/xizon/uix-kit',
    title: '兼容 Bootstrap 的快速建站 HTML5 套件',
    tags: ['UI框架']
  },
  {
    label: 'Semantic UI',
    value: 'http://semantic-ui.com/',
    title: '语义化设计的前端框架，为攻城师而制作的可复用的开源前端框架',
    tags: ['UI框架']
  },
  {
    label: 'cssReset',
    value: 'http://www.cssreset.com/',
    title: '搜集了各种css reset解决方案',
    tags: ['CSS资源']
  },
  {
    label: 'animate动画库',
    value: 'http://daneden.github.io/animate.css/',
    title: '',
    tags: ['CSS资源']
  },
  {
    label: 'CSS3lib动画库',
    value: 'http://css3lib.alloyteam.com/',
    title: '由腾讯AlloyTeam搜集和整理的CSS3动画库',
    tags: ['CSS资源', '腾讯']
  },
  {
    label: 'ECD动画库',
    value: 'http://ecd.tencent.com/css3/index.html',
    title: '由腾讯电商前端团队编写的CSS3动画库',
    tags: ['CSS资源', '腾讯']
  },
  {
    label: 'css3please',
    value: 'http://css3please.com/',
    title: '常用的CSS3具体代码参考',
    tags: ['CSS资源']
  },
  {
    label: 'css3ClickChart',
    value: 'http://css3clickchart.com/',
    title: '可以查询到目前CSS3草案部分的相关属性',
    tags: ['CSS资源']
  }
]

export const FE: Array<OptionValue> = [
  {
    label: 'Can I use',
    value: 'http://caniuse.com/',
    title: '这是一个极好的网站，查询你使用的属性方法在浏览器中的兼容。',
    tags: ['工具', 'caniuse']
  },
  {
    label: 'W3school 英文网站',
    value: 'http://www.w3schools.com/',
    title: "w3school 中文站的来源：THE WORLD'S LARGEST WEB DEVELOPER SITE",
    tags: ['教程', '手册']
  },
  {
    label: 'W3C在线检验',
    value: 'http://validator.w3.org/',
    title: 'W3C在线检验',
    tags: ['社区']
  },
  {
    label: 'Awesomes - 前端资源库',
    value: 'https://www.awesomes.cn/',
    title: '免费开源的高质量前端库、框架和插件',
    tags: ['社区']
  },
  {
    label: 'JavaScript Event KeyCodes',
    value: 'http://keycode.info/',
    title: '在线Keycode查询',
    tags: ['工具']
  }
]
export const Vue: Array<OptionValue> = [
  {
    label: 'Vue技术揭秘',
    value: 'https://ustbhuangyi.github.io/vue-analysis/'
  },
  {
    label: 'Vue技术内幕',
    value: 'http://hcysun.me/vue-design/art/'
  }
]
export const Regex: Array<OptionValue> = [
  {
    label: '正则表达式',
    value:
      'https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md'
  },
  {
    label: '正则表达式验证匹配',
    value: 'https://regexr.com/'
  },
  {
    label: 'RegExr',
    value: 'http://regexr.com/',
    title: '一个用Flex写的在线测试正则的工具',
    tags: ['工具', '正则']
  },
  {
    label: 'RegExr',
    value: 'http://www.regexpal.com/',
    title: '一个用JS写的在线正则测试工具',
    tags: ['工具', '正则']
  }
]

export const Git: Array<OptionValue> = [
  {
    label: '聊聊 Git 「改变历史」',
    value: 'https://zhuanlan.zhihu.com/p/29497618'
  },
  {
    value: 'https://marklodato.github.io/visual-git-guide/index-zh-cn.html',
    label: '图解Git'
  },
  {
    label: 'git 撤销工作',
    value: 'https://zhuanlan.zhihu.com/p/42929114'
  },
  {
    label: '根据选择生成.gitignore文件',
    value: 'https://www.gitignore.io/'
  }
]
export const Webpack: Array<OptionValue> = [
  {
    label: '深入浅出 Webpack',
    value: 'http://webpack.wuhaolin.cn/'
  },
  {
    label: 'Webpack 4 和单页应用入门',
    value: 'https://github.com/wallstreetcn/webpack-and-spa-guide'
  },
  {
    label: '带你用合理的姿势使用 webpack4',
    value: 'https://juejin.im/post/5b56909a518825195f499806'
  }
]
export const OnlineEdit: Array<OptionValue> = [
  {
    label: 'jsBin',
    value: 'http://jsbin.com/'
  },
  {
    label: 'jsFiddle',
    value: 'https://jsfiddle.net/'
  },
  {
    label: 'CodePen代码笔',
    value: 'http://codepen.io/',
    title:
      '前端工程师必备的技术网站，直接在显示编辑代码片段并分享。codepen！寻找交互灵感的圣地',
    tags: ['工具', '互交设计', '在线编辑器']
  },
  {
    label: 'CodeSandbox',
    value: 'https://codesandbox.io/',
    title: '前端工程师必备的技术网站，直接在显示编辑代码片段并分享。',
    tags: ['工具', '互交设计', '在线编辑器']
  }
]

export const Interview: Array<OptionValue> = [
  {
    label: '前端面试问题',
    value: 'https://github.com/h5bp/Front-end-Developer-Interview-Questions'
  }
]

export const Community: Array<OptionValue> = [
  {
    label: '掘金',
    value: 'https://juejin.im/timeline'
  },
  {
    label: 'V2EX',
    value: 'https://www.v2ex.com/',
    title: '一个关于分享和探索的地方'
  },
  {
    label: 'jstips',
    value: 'http://www.jstips.co/',
    title: '每天推出一个JS技巧的网站'
  }
]

export const Tutorial: Array<OptionValue> = [
  {
    label: 'Linux',
    value: 'https://www.digitalocean.com/community'
  },
  {
    label: 'NodeJS技术栈',
    value: 'https://www.nodejs.red/#/README'
  },
  {
    label: 'underscore源码分析',
    value: 'https://yoyoyohamapi.gitbooks.io/undersercore-analysis/content/'
  },
  {
    label: 'React小书',
    value: 'http://huziketang.mangojuice.top/books/react/'
  },
  {
    label: '深入理解 TypeScript',
    value: 'https://jkchao.github.io/typescript-book-chinese/'
  },
  {
    label: '前端面试图谱',
    value: 'https://yuchengkai.cn/docs/frontend/'
  }
]

export const Book: Array<OptionValue> = [
  {
    label: '编程中文书籍索引',
    value: 'https://github.com/justjavac/free-programming-books-zh_CN'
  },
  {
    label: 'Linux 命令行',
    value: 'http://billie66.github.io/TLCL/book/'
  },

  {
    label: '中文排版指北',
    value: 'https://github.com/sparanoid/chinese-copywriting-guidelines'
  }
]
