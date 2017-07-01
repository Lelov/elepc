<template lang="html">
  <div class="footer" :style="{display:displayStyle}">
    <!-- 下载区域 -->
    <div class="logo_a_offer">
      <div class="down_app">
        <img src="../../assets/images/app_icon.png" alt="app下载">
        <span class="down_app_txt">扫码下载</span>
      </div>
      <div class="down_offer">
        <p>新用户首次下单</p>
        <strong class="off_txt">最高立减20元</strong>
        <p>立即下载APP，享更多优惠吧！</p>
      </div>
    </div>
    <!-- 帮助及合作区域 -->
    <div class="footer_ad">
      <ul>
        <li>
          <h4>用户帮助</h4>
          <a href="##">服务中心</a>
          <a href="##">常见问题</a>
        </li>
        <li>
          <h4>商务合作</h4>
          <a href="##">我要开店</a>
          <a href="##">加盟指南</a>
          <a href="##">市场合作</a>
          <a href="##">开放平台</a>
        </li>
        <li>
          <h4>关于我们</h4>
          <a href="##">饿了么介绍</a>
          <a href="##">加入我们</a>
          <a href="##">联系我们</a>
          <a href="##">规则中心</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 底部显示方式,默认为 flex
    displayStyle: {
      type: String,
      default: 'flex'
    }
  }
};
</script>

<style lang="css">
  .footer{
    justify-content: center;
  }
  /* app下载图标 */
  .logo_a_offer{
    margin-bottom: 10px;order: 2;
    display: flex;justify-content: center;align-items: center;
  }
  .down_app{
    width: 170px;height: 170px;position: relative;padding: 15px;border: 1px solid #ddd;
  }
  .down_app img{
    width: 140px;height: 140px;
  }
  .down_app_txt{
    position: absolute;bottom: -7px;left: center;margin-left: -42px;color: #999;background-color: #fff;letter-spacing: 2px;font-size: 14px;padding: 0 10px;
  }
    /* app下载图标左侧 */
  .down_offer{
    text-align: left;padding-left: 20px;
  }
  .down_offer strong{
    color: #f74342;font-size: 30px;font-weight: bold;line-height: 54px;
  }
  /* 底部文字 */
  .footer_ad{
    margin-top: 40px;order: 0;
  }
  .footer_ad ul{
    display: flex;width: 600px;margin: 0 auto;
  }
  .footer_ad li{
    flex-grow: 1;
  }
  .footer_ad h4{
    line-height: 2;
  }
  .footer_ad a{
    font-size: 12px;line-height: 1.5;
    display: block;width: 40%;margin: 0 auto;
  }
  .footer_ad a:hover{
    text-decoration: underline;
  }
</style>
