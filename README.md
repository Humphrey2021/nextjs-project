## 项目目录结构

```md
|-- _gulpTemplate           // gulp模版文件夹
|   |-- components.js       // 组件模版文件
|   |-- pages.js            // 路由页面模版文件
|-- components              // 存放组件文件夹
|   |-- myHead
|       |-- index.js        // 配置项目头部文件
|-- pages                   // 项目目录
|   |-- _app.js             // 入口文件
|   |-- index.js            // 首页
|   |-- api
|       |-- hello.js
|-- public                  // 静态资源文件
|   |-- images              // 网站静态图片库
|   |-- icons               // 网站图标库
|   |-- favicon.ico
|-- styles                  // 样式文件
    |-- globals.css         // 全局样式入口文件
    |-- reset.less          // 初始化样式
    |-- variable.json       // 网站主题样式变量配置
|-- utils                   // 公共方法配置
|-- .eslintignore           // eslint忽略文件
|-- .eslintrc.json          // eslint规则配置
|-- .gitignore              // git忽略文件配置
|-- .prettierrc             // 代码格式规范文件
|-- gulpfile.js             // 工程化 gulp 配置
|-- next.config.js          // 项目配置文件
|-- package.json
|-- README.md               // 项目说明文档
```

## 运行启动项目

```shell
# 1， 安装依赖
npm install # or yarn
# 2. 启动项目
npm run dev # or yarn dev
# 3. 打包项目
npm run build # or yarn build
```

## 新建路由页面/组件

> 在命令行运行`yarn c`命令，会在对应`pages/components`中自动生成对应文件及基础结构

## 配置 antd 主题色

进入`styles/variable.json`文件，根据官网变量名配置对应主题色,所有的样式变量可以在[这里](http://172.16.1.65/)找到。

## 项目规范

1. 命名方式统一采用驼峰命名法
2. 在`components`中新建组件时，当组件使用次数在两次以上(包括两次)时，在`components`中可以直接创建该组件，当组件只是在某个路由界面自己使用时，在`components`中以当前路由组件为名创建文件夹，在该文件夹内部创建对应组件
    > 例：
    > 创建一个多次使用的头部组件,在`components`中新建`header/index.js`文件
    > 创建只在首页使用的`banner`组件,在`components`中新建`home/banner/index.js`文件

3. 样式文件在对应目录创建`xxx.module.less`去编写，尽量不要直接卸载`<style jsx></style>`中，因为`postcss`转换不了`jsx`内部`px`到`rem`

### 待完成

1. axios配置
2. redux配置
