<template lang="html">
  <div class="home">
    <ele-head></ele-head>
    <div class="home_cont">
      <home-cont></home-cont>
    </div>
    <ele-footer></ele-footer>
  </div>
</template>

<script>
import eleHead from '../common/eleHead';
import eleFooter from '../common/eleFooter';
import homeCont from './homeCont';

export default {
  components: {
    eleHead,
    eleFooter,
    homeCont
  },
  data () {
    return {
    };
  }
};
</script>

<style lang='less'>
@import '../../less/style.less';
.home_cont{
  width: @minWidth;margin: 0 auto;
}
.home{
  background-color: #f7f7f7;
}
.home .footer{
  margin-top: 50px;
}
</style>
