# vue-book

> A Vue.js project

### 项目会用到less 数据请求

```
npm install less less-loader axios vuex
```
- mock模拟数据  sliders.js作为接口
- api 代表的是所有的接口
- base 基础组件
- components 页面组件

## 热门图书的功能
- 先写服务器 确保数据正常返回
- 增加api方法 实现调取数据的功能
- 在那个组件中应用这个api 如果一个基础组件需要这些数据 在使用这个组件的父级中调用这个方法
将数据传递给基础组件
- 写一个基础组件
	- 1.创建一个.vue文件
	- 2.在需要使用这个组件的父级中引用这个组件
	- 3.在组件注册
	- 4.以标签的形式引入