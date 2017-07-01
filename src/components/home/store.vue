<template lang="html">
  <div class="store_nav">
    <div class="store_nav_title" v-if="hasNav">
      商家分类:　　
    </div>
    <div class="store_nav_cont">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hasNav: {
      type: String,
      default: 'none'
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../less/style.less';
.store_nav{
  padding: 10px;border: 1px solid @baseBorderColor;border-radius: 2px;background-color: #fff;
  display: flex;
}
.store_nav_title{
  color: @baseLightColor;padding-top: 10px;width:106px;
}
.store_nav_cont{
  display: flex;flex-wrap: wrap;
}
.store_nav a{
  font-size: 14px;padding: 5px 10px;border-radius: 4px;margin: 5px;
}
.store_nav a:hover{
  background-color: #eee;
}
</style>
