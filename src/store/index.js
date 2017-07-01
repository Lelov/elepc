import Vue from 'vue';
import Vuex from 'vuex';
import Welcome from './modules/welcome';
Vue.use(Vuex);
// 存储数据并导出模块
export default new Vuex.Store({
  // 输出模板
  modules: {
    Welcome
  }
});
