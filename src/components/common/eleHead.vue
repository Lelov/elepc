<template lang="html">
  <header class="header">
    <div class="header_wrap">
      <div class="left">
        <!-- logo -->
        <div class="logo">
          <a href="JavaScript:;"><span>e</span>饿了么</a>
        </div>
        <!-- 左侧导航 -->
        <div class="nav">
          <a href="javascript:;" class="ac">首页</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;">加盟合作</a>
        </div>
      </div>
      <div class="right">
        <div class="nav_help">
          <a href="javascript:;">服务中心</a>
          <a href="javascript:;">规则中心</a>
          <a href="javascript:;">手机应用</a>
        </div>
        <div class="login">
          <a href="javascript:;">登录</a>/
          <a href="javascript:;">注册</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
@import '../../less/style.less';
a{
  color: #fff;
}
.header{
  height: 60px;background-color: @baseColor;line-height: 60px;
}
.header_wrap{
  width: @minWidth;height: 100%;margin: 0 auto;
  display: flex;justify-content: space-between;
}
.left,.right{
  display:flex;
}
.logo{
  width: 125px;font-size: 30px;line-height: inherit;
}
.logo a{
  font-weight: 600;vertical-align: top;
}
.logo span{
  transform: rotate(-20deg) translateY(-2px);display: inline-flex;margin-right: 2px;font-weight: 600;font-size: 45px;
}
.nav{
  display: flex;flex-grow: 1;margin-left: 10px;
}
.nav a{
  font-size: 16px;width: 112px;
}
.nav a:hover{
  background-color: #0c77d1
}
.nav a.ac{
  background-color: #006bc7;
}
.right{
  width: 450px;justify-content: space-between;color: #fff;font-size: 14px;
}
.nav_help{
  display: flex;
}
.nav_help a{
  width: 106px;opacity: .6;
}
.nav_help a:hover{
  opacity: 1;
}
</style>
