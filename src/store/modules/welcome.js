const state = {
  chooseAdress: false,
  chooesdAdress: '重庆'
};
// 提供数据数据接口
const getters = {
  // 获取是否选择地址
  getChooseAdressState: state => state.chooseAdress,
  // 获取选择的地址
  getAdress: state => state.chooesdAdress
};
// 同步操作的函数
const mutations = {
  setChooseAdressState: state => {
    // 选择地址后对选择状态值进行执反
    state.chooseAdress = !state.chooseAdress;
    // 返回是否选中地址
    return state.chooseAdress;
  },
  // 设置选择的地址
  setAdress: state => state.chooesdAdress
};

export default {
  state,
  getters,
  mutations
};
