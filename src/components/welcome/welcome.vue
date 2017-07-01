<template lang="html">
  <div class="welcome_cont">
    <!-- 顶部 -->
    <div class="welcome_cont_top">
      <div class="wrap">
        <img src="../../assets/images/map-logo-center.png" alt="">
        <div class="input_group">
          <select>
            <option value="chongqing">重庆</option>
          </select>
          <input type="text" v-model="place_val" placeholder="请随意搜索地方,数据都一样"  title="随意搜索,都只有一个页面">
          <button type="button"  @click="goShop">搜索</button>
        </div>
      </div>
    </div>
    <!-- 底部网站信息区域 -->
    <div class="welcome_cont_bot">
      <ele-footer displayStyle="block"></ele-footer>
    </div>
  </div>
</template>

<script>
import eleFooter from '../common/eleFooter';

export default {
  components: {
    eleFooter
  },
  data() {
    return {
      place_val: ''
    };
  },
  methods: {
    goShop () {
      // 如果没有选择默认为大重庆并转到 首页
      if (!this.place_val) this.place_val = '重庆';
      // 设置选择的地址
      localStorage.choosedAdress = this.place_val;
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped lang="css">
  .welcome_cont{
    min-width: 600px;
  }
  .welcome_cont_top{
    height: 500px;background: url('../../assets/images/welcome_top_bg.png') center;background-size: cover;margin-bottom: 60px;
    display: flex;justify-content: center;align-items: center;
  }
  img{
    width: 280px;  margin-bottom: 50px;
  }
  .input_group{
    height: 56px;display: flex;position: relative;
  }
  input,button,select{
    height: 100%;
  }
  select{
    font-size: 18px;
  }
  input{
    width: 400px;text-indent: 1em;font-size: 16px;
  }
  .input_group::after{
    content: '';display: block;width: 1px;height: 60%;background-color: #ccc;position: absolute;left: 58px;;top: 20%;
  }
  button{
    width: 128px;cursor: pointer;background-color: #f74342;color: #fff;font-size: 18px;margin-left: 10px;
  }
  button:hover{
    background-color: #e62625;
  }
</style>
