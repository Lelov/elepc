<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      choosedAdress: ''
    };
  },
  mounted() {
    this.choosedAdress = localStorage.choosedAdress;
    // 判断是否选择地址
    !this.choosedAdress ? this.$router.push('/welcome') : this.$router.push('/home');
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
</style>
