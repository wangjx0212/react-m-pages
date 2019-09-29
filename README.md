# 前言


# 项目目录

!['tree'](https://raw.githubusercontent.com/wangjx0212/GitImage/master/Image/react-m-pages-tree.jpg )


# 相关命令

**npm run dev**   
开启本地服务

## 新建页面
app->component -> 新建index文件夹，并建立Index.jsx

**入口文件：**
config -> entry -> entry.js
只需要在这里添加相关信息：

```javascript
module.exports = [
    {
        name: 'index',
        path: 'index/Index.jsx',
        title: '首页',
        keywords: '首页,xxx',
        description: '这是我们的首页'
    }
]
```

**npm run devNew**
会分别在 ‘devBuild’ 和 ‘entryBuild’  生成对应的 js 和 html 文件




