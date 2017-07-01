<template lang="html">
  <div class="store_item">
    <div class="store_icon">
      <div class="store_img">
        <slot name="storeImg"></slot>
      </div>
      <span>{{ billTime }}分钟</span>
    </div>
    <div class="store_info">
      <div class="store_name">
        {{ storeName }}
      </div>
      <div class="per_info">
        <span class="store_star">{{ storeStar }}星　</span>
        月售<span>{{ storeSellNum }}</span>单
      </div>
      <div class="storeSendPrice">
      {{ storeSendPrice }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'billTime',       // 花费时间
    'storeName',      // 商定名称
    'storeStar',      // 商定评分
    'storeSellNum',   // 月售量
    'storeSendPrice'  // 配送费
  ]
};
</script>

<style lang="less">
@import "../../less/style.less";

.store_item{
  padding: 20px;width: 299.5px;font-size: 12px;line-height: 1.8 ;color: @baseLightColor;text-align: left;
  display: flex;cursor: pointer;
}
.store_item:hover{
  background-color: #f7f7f7;
}
.store_item:hover .store_name{
  color: @baseColor;
}
.store_icon{
  padding-right: 20px;text-align: center;
}
.store_star{
  color: #ffc30c;
}
.store_img{
  width: 70px;height: 70px;
}
.store_img img{
  width: 100%;height: 100%;
}
.store_icon span{
  padding-top: 20px;display: inline-flex;
}
.store_name{
  font-size: 16px;font-weight: 600;line-height: 2;color: #333;
}

.per_info{
  overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
}
</style>
