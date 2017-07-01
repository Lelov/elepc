
# 1.安装vuex
```
npm install vuex --save
```
在index.js中注册 vuex
```
// 导入 vuex
import vuex from 'vuex';

// 全局注册
Vue.use(vuex);
```
# 2. vuex介绍
  `Vuex` 是一个专门为 `Vue.js` 应用所设计的集中式状态管理架构, `Vuex` 只适用于项目复杂程度很高才考虑采用.否则不建议
在vue中每个组件都独自管理自己的应用状态,当其他组件想要获取就要利用一些手段来获取,比如常见的利用 `props` 进行父子之间传值,利用 `$emit` 和 `$on` 子父通信,就有点繁琐了,组件传值就更繁琐了,所以才会有 `Vuex` 的诞生,这样就不用到处通过事件来传值,*因为任何牵扯到一个以上组件的逻辑，都应该使用 `Vuex` 来管理状态*,这样页方便管理全局的状态值.
# 3. Store
  `Vuex` 使用 单一状态树 `The state tree`,即用一个对象来管理应用的全部组件的状态,这个对象就是 `Store` ,而每个应用都只能包含一个  `Store` 的实例
  ```
  // 获取  Store 的实例
  const store = new Vue.Stroe({
    // 各种设置相关
    });
  ```
  .......
# 在项目中配置vuex
首先确保安装 `vuex`
在 `src` 目标下新建 `store` 文件夹用于存放 `vuex` 相关资源,目录架构如下
```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   ├── componentsName1.vue
│   ├── componentsName1.vue
│   └── ...
└── store
    ├── index.js          # 组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action(公用)
    ├── mutations.js      # 根级别的 mutation(公用)
    └── modules           # 配置每个组件的模块数据,每个模块都有 state、mutation、action、getter
        ├── componentsName1.js   # componentsName1模块
        ├── componentsName2.js   # componentsName2模块
        └── componentsNamen.js
```
通过案例来说明 `vuex` 的使用方法
在hello.vue通过两个按钮来完成 初始值为0的加减
- 1.首先创建号目录结构及文件
进入 `store` 下的 `index.js` 文件,进行编辑
```
// 导入Vue,及Vuex
import Vue from 'vue';
import Vuex from 'vuex';

// 通过Vue.use() 在全局注册Vuex
Vue.use(Vuex);

// 导出 Vuex 实例
export default new Vuex.Store({
  // 参数设置
  module: {
    // 需要导出的模板
  }
});
```
- 2.进入根目录的 `main.js` 将`store` 与 应用关联
```
// 导入store
import store from './store/store'

new Vue({
  ...,
  // 将store配置到vue实例中
  store,
  ...
})
```
- 3.进入 modules 文件夹对目标Hello进行模板的数据编写
```
  // 数据
  const state = {
    count: 0
  }
  // 异步操作的函数
  const actions = {
    // 主要用于请求数据
  }
  // 对外暴露接口
  const getters = {
    getCount: state => state.count
  }
  // 同步操作的函数
  const mutations = {
    // 在组件中使用this.$store.commit(方法名) 用来调用 mutations中的方法
    inc: state => state.count++,
    dec: state => state.count--
  }
  // 导出模板数据
  export default {
    state,
    mutations,
    actions,
    getters
  }
```
- 4.在store下的index.js中注册 Hello模块数据
```
....
// 引入模块的模板
import Hello from './modules/hello'
....
// 导出 Store 实例
export default new Vuex.Store({
  modules: {
    Hello
  }
  ...
});
```
- 5.进入hello.vue模板数据处理
进行逻辑函数处理的编写
```
...
methods: {
  // 加法函数,通过 this.$store的commit方法调用 Hello 模板actions里的 inc方法
  inc () {
      this.$store.commit('inc')
  },
  // 同上
  dec () {
      this.$store.commit('dec')
  }
}
...
```
在button上绑定点击事件
```
<button type="button" @click="inc">+</button>
<button type="button" @click="dex">-</button>
```
通过计算属性 `computed` 将 获取 `Hello` 模板上的 `getCount` 的返回值 输出到也买呢中
```
...
computed: {
  count: {
    // 通过 store 的 getters 获取到 getCount 的返回值
    return this.$store.getters.getCount;
  }
}
...
```
最后在页面中通过{{  }}写入 计算属性名 `count` 来获取到 vuex 中 state 的值
