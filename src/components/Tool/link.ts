interface link {
  code?: {
    label: string
    children: Object
  }
  tool?: {
    label: string
    children: Object
  }
  pic?: {
    label: string
    children: Object
  }
  resource?: {
    label: string
    children: Object
  }
  [propName: string]: any
}
export const toolLinks: link = {
  code: {
    label: '代码',
    children: [
      {
        label: 'JSON 美化',
        value: 'https://www.json.cn/'
      },
      {
        label: '练习打字',
        value: 'https://www.typingclub.com'
      },
      {
        label: '微信公众号排版',
        value: 'https://lab.lyric.im/wxformat/'
      },
      {
        label: 'jsBin',
        value: 'http://jsbin.com/'
      },
      {
        label: 'jsFiddle',
        value: 'https://jsfiddle.net/'
      },
      {
        label: '测试 JS 性能',
        value: 'https://www.measurethat.net/Benchmarks'
      },
      {
        label: '算法可视化',
        value: 'https://visualgo.net/en'
      }
    ]
  },
  tool: {
    label: '文件处理',
    children: [
      {
        label: 'PDF 处理',
        value: 'https://www.ilovepdf.com/'
      }
    ]
  },

  pic: {
    label: '图片处理',
    children: [
      {
        label: '生成代码图片',
        value: 'https://carbon.now.sh/'
      },
      {
        label: '阿里巴巴矢量图标库',
        value: 'http://www.iconfont.cn/plus/search/index'
      },
      {
        label: '比特虫',
        value: 'http://www.bitbug.net/'
      },
      {
        label: 'Favicon Generator',
        value: 'https://realfavicongenerator.net/'
      },
      {
        label: '调整图片大小',
        value: 'https://www.befunky.com/create/resize-image/'
      },
      {
        label: 'tinypng',
        value: 'https://tinypng.com/'
      },
      {
        label: 'ImageMagick',
        value: 'https://www.imagemagick.org/script/command-line-processing.php'
      },
      {
        label: 'pngquant',
        value: 'https://github.com/kornelski/pngquant'
      },
      {
        label: 'pngquant GUI 工具',
        value: 'https://pngquant.org/PNGoo.0.1.1.zip'
      },
      {
        label: 'ASCII 码字符画在线绘制',
        value: 'http://asciiflow.com/'
      }
    ]
  },
  resource: {
    label: '资源',
    children: [
      {
        label: '渐变色网站',
        value: 'https://uigradients.com/#Wiretap'
      },
      {
        label: '非常好看的图片',
        value: 'https://dribbble.com/'
      },
      {
        label: '免费高清图片',
        value: 'https://pixabay.com/zh/photos/'
      }
    ]
  }
}
