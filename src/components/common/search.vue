<template lang="html">
  <div class="input_temp">
    <input type="text" placeholder="搜索商家,美食..."><button type="button">GO</button>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
@import "../../less/style.less";
input{
  width: 280px;transition: width .3s;height: 32px;border: 1px solid @baseBorderColor;padding: 8px;border-right: none;
}
input:focus{
  width: 320px;
}
button{
  width: 40px;height:32px;border: 1px solid @baseBorderColor;background-color: #fff;cursor: pointer;
}
button:hover{
  color: @baseColor;
}
</style>
