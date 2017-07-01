<template lang="html">
  <div class="home_cont">
    <div class="home_cont_nav">
      <div class="address">
        <span>当前位置:</span>{{ choosedAdressTxt }}<a href="javscript:;" @click="goWelcome">　[更换地址]</a>
      </div>
      <search></search>
    </div>
    <store hasNav="block">
      <a href="javascript:;" v-for="item in storeArr">{{ item.name }}</a>
    </store>
    <div class="store_list">
      <store-item
        v-for="(item,index) in sjData"
        :key="index"
        :billTime="item.order_lead_time"
        :storeName="item.name"
        :storeStar="item.rating"
        :storeSellNum="item.distance"
        :storeSendPrice="item.piecewise_agent_fee.description"
        >
          <img :src="item.image_path | getImgPath" slot="storeImg">
        </store-item>
    </div>
  </div>
</template>

<script>
import search from '../common/search';
import store from './store';
import storeItem from './storeItem';

export default {
  components: {
    search,
    store,
    storeItem
  },
  filters: {
    getImgPath (val) {
      // 拼接地址
      let str1 = val.substring(0, 1);
      let str2 = val.substring(1, 3);
      let str3 = val.substring(3);
      let str = str1 + '/' + str2 + '/' + str3;
      let picFormat = str.indexOf('png') === -1 ? 'jpeg' : 'png';
      // 返回图片路径
      let url = '//fuss10.elemecdn.com/' + str + '.' + picFormat + '?imageMogr2/thumbnail/70x70/format/webp/quality/85';
      return url;
    }
  },
  data () {
    return {
      choosedAdressTxt: '',
      storeArr: [
        {
          name: '全部商家'
        },
        {
          name: '美食'
        },
        {
          name: '快餐便当'
        },
        {
          name: '特色菜系'
        },
        {
          name: '异国料理'
        },
        {
          name: '小吃夜宵'
        },
        {
          name: '甜品饮品'
        },
        {
          name: '果蔬生鲜'
        },
        {
          name: '鲜花蛋糕'
        },
        {
          name: '商店超市'
        },
        {
          name: '早餐'
        },
        {
          name: '正餐优选'
        },
        {
          name: '下午茶'
        },
        {
          name: '夜宵'
        }
      ],
      sjData: [
        {
          activities: [
            {
              attribute: '17.0',
              description: '新用户下单立减17.0元',
              icon_color: '70bc46',
              icon_name: '新',
              id: 31412143,
              is_exclusive_with_food_activity: true,
              name: '新用户立减(不与其他活动共享)',
              tips: '新用户下单立减17.0元',
              type: 103
            },
            {
              attribute: '{\'50\': {\'1\': 25, \'0\': 0}}',
              description: '满50减25',
              icon_color: 'f07373',
              icon_name: '减',
              id: 35510259,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满50减25',
              type: 102
            }
          ],
          address: '重庆市南岸区南坪江南大道28号星光时代广场B1层B1-009-E号​',
          authentic_id: 5371128074642673,
          average_cost: '¥23/人',
          delivery_mode: {
            color: '2395FF',
            gradient: {
              rgb_from: '00AAFF',
              rgb_to: '0085FF'
            },
            id: 1,
            is_solid: true,
            text: '蜂鸟专送'
          },
          description: '鲜芋仙坚持“新鲜，现煮，现卖”的经营理念，保证消费者尝到新鲜、地道的台式甜品。新鲜的原料让食材呈现了完美的口感，也让追求美食的消费者能够放心、安心、舒心地食用。主打“芋圆”“仙草”延续怀旧风，让都市人重温儿时的甜蜜，品味浓浓的亲情。',
          distance: 1114,
          favored: false,
          float_delivery_fee: 3,
          float_minimum_order_amount: 20,
          id: 653273,
          image_path: '4eb9b40059084f65b68bf002ee4198e0png',
          is_new: false,
          is_premium: true,
          is_stock_empty: 0,
          latitude: 29.52226,
          longitude: 106.571543,
          max_applied_quantity_per_order: -1,
          name: '鲜芋仙（协信星光店）',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '10:30/21:40'
          ],
          order_lead_time: 36,
          phone: '02362539956',
          piecewise_agent_fee: {
            description: '配送费¥3',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 3,
                price: 20
              }
            ],
            tips: '配送费¥3'
          },
          promotion_info: '欢迎光临鲜芋仙，又到吃冰的季节了，选择您喜欢的产品，让鲜芋仙为您带去一丝清凉！活动期间单品折扣与满减优惠不能同享祝您用餐愉快！',
          rating: 4.9,
          rating_count: 0,
          recent_order_num: 355,
          regular_customer_count: 0,
          status: 1,
          supports: [
            {
              description: '已加入“外卖保”计划，食品安全有保障',
              icon_color: '999999',
              icon_name: '保',
              id: 7,
              name: '外卖保'
            },
            {
              description: '准时必达，超时秒赔',
              icon_color: '57A9FF',
              icon_name: '准',
              id: 9,
              name: '准时达'
            }
          ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'60\': {\'1\': 26, \'0\': 0}, \'20\': {\'1\': 12, \'0\': 0}, \'30\': {\'1\': 17, \'0\': 0}}',
              description: '满20减12，满30减17，满60减26',
              icon_color: 'f07373',
              icon_name: '减',
              id: 31136164,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满20减12，满30减17，满60减26',
              type: 102
            },
            {
              description: '5.88',
              icon_color: 'f1884f',
              icon_name: '特',
              id: 36179578,
              name: '5.88',
              tips: '5.88'
            },
            {
              description: '冰凉夏日鲜榨西瓜汁特价3.88元秒杀',
              icon_color: 'f1884f',
              icon_name: '特',
              id: 35937102,
              name: '冰凉夏日鲜榨西瓜汁特价3.88元秒杀',
              tips: '冰凉夏日鲜榨西瓜汁特价3.88元秒杀'
            },
            {
              description: '饿了么推荐店铺',
              icon_color: 'f1884f',
              icon_name: '特',
              id: 33288158,
              name: '饿了么推荐店铺',
              tips: '饿了么推荐店铺'
            },
            {
              description: '饿了么推荐店铺',
              icon_color: 'f1884f',
              icon_name: '特',
              id: 33287959,
              name: '饿了么推荐店铺',
              tips: '饿了么推荐店铺'
            },
            {
              description: '【饿了么推荐店铺】1元秒杀',
              icon_color: 'f1884f',
              icon_name: '特',
              id: 32302139,
              name: '【饿了么推荐店铺】1元秒杀',
              tips: '【饿了么推荐店铺】1元秒杀'
            },
            {
              description: '特价菜',
              icon_color: 'f1884f',
              icon_name: '特',
              id: 31136100,
              name: '特价菜',
              tips: '特价菜'
            }
          ],
          address: '重庆市南岸区南坪街道南城大道197号1-12号',
          authentic_id: 1331158095365015,
          average_cost: '¥21/人',
          description: '',
          distance: 1527,
          favored: false,
          float_delivery_fee: 16.5,
          float_minimum_order_amount: 20,
          id: 156052215,
          image_path: '9db827d43d3f3c3e14f6d44b243a9526jpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.523203,
          longitude: 106.565357,
          max_applied_quantity_per_order: -1,
          name: '如果汁己',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '00:00/24:00'
          ],
          order_lead_time: 55,
          phone: '13828748457',
          piecewise_agent_fee: {
            description: '配送费¥16.5',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 16.5,
                price: 20
              }
            ],
            tips: '配送费¥16.5'
          },
          promotion_info: '',
          rating: 4,
          rating_count: 0,
          recent_order_num: 1110,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'20\': {\'1\': 1, \'0\': 0}}',
              description: '满20减1',
              icon_color: 'f07373',
              icon_name: '减',
              id: 35389104,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满20减1',
              type: 102
            }
          ],
          address: '重庆市南岸区四公里街339号负二至二层（1-2号、1-3号）、一层7号',
          authentic_id: 5341178091560027,
          delivery_mode: {
            color: '2395FF',
            gradient: {
              rgb_from: '00AAFF',
              rgb_to: '0085FF'
            },
            id: 1,
            is_solid: true,
            text: '蜂鸟专送'
          },
          description: '',
          distance: 658,
          favored: false,
          float_delivery_fee: 3,
          float_minimum_order_amount: 20,
          id: 1887727,
          image_path: 'a1919f10b386c0818f3a26d520ed90adpng',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.507359,
          longitude: 106.573813,
          max_applied_quantity_per_order: -1,
          name: '茶の味',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '10:00/22:00'
          ],
          order_lead_time: 40,
          phone: '17623586006 15123981568 15123037147',
          piecewise_agent_fee: {
            description: '配送费¥3',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 3,
                price: 20
              }
            ],
            tips: '配送费¥3'
          },
          promotion_info: '',
          rating: 4.4,
          rating_count: 0,
          recent_order_num: 77,
          regular_customer_count: 0,
          status: 1,
          supports: [
            {
              description: '已加入“外卖保”计划，食品安全有保障',
              icon_color: '999999',
              icon_name: '保',
              id: 7,
              name: '外卖保'
            },
            {
              description: '准时必达，超时秒赔',
              icon_color: '57A9FF',
              icon_name: '准',
              id: 9,
              name: '准时达'
            }
          ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'58\': {\'1\': 5, \'0\': 0}, \'258\': {\'1\': 15, \'0\': 0}, \'158\': {\'1\': 10, \'0\': 0}}',
              description: '满58减5，满158减10，满258减15',
              icon_color: 'f07373',
              icon_name: '减',
              id: 30758620,
              is_exclusive_with_food_activity: false,
              name: '满减优惠',
              tips: '满58减5，满158减10，满258减15',
              type: 102
            },
            {
              description: '新店特惠',
              icon_color: 'f07373',
              icon_name: '特',
              id: 30761523,
              name: '新店特惠',
              tips: '新店特惠'
            },
            {
              description: '特惠3.88折',
              icon_color: 'f07373',
              icon_name: '特',
              id: 30759839,
              name: '特惠3.88折',
              tips: '特惠3.88折'
            }
          ],
          address: '重庆市南岸区珊瑚路6号1栋1层店面1号',
          authentic_id: 8341188078155985,
          average_cost: '¥45/人',
          description: '大象蛋糕——你手机里的蛋糕店',
          distance: 1590,
          favored: false,
          float_delivery_fee: 10,
          float_minimum_order_amount: 0,
          id: 155841385,
          image_path: '2e39da378904997f77e21f1d76eaae4dpng',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.525258,
          longitude: 106.567478,
          max_applied_quantity_per_order: -1,
          name: '大象蛋糕（南坪万达店）',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '09:00/21:00'
          ],
          order_lead_time: 39,
          phone: '18580366713',
          piecewise_agent_fee: {
            description: '配送费¥10',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 10,
                price: 0
              }
            ],
            tips: '配送费¥10'
          },
          promotion_info: '★下单必看★15520088899（微信）',
          rating: 4.6,
          rating_count: 0,
          recent_order_num: 123,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'5\': {\'1\': 4, \'0\': 0}, \'30\': {\'1\': 12, \'0\': 0}, \'55\': {\'1\': 25, \'0\': 0}}',
              description: '满5减4，满30减12，满55减25',
              icon_color: 'f07373',
              icon_name: '减',
              id: 33348224,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满5减4，满30减12，满55减25',
              type: 102
            },
            {
              attribute: '{\'72.0\': {\'quantity\': 1, \'must_pay_online\': 1, \'name\': \'\\u7d2b\\u85af\\u7403\'}}',
              description: '满72.0元赠送紫薯球1份',
              icon_color: '3cc791',
              icon_name: '赠',
              id: 30809453,
              is_exclusive_with_food_activity: true,
              name: '满赠优惠',
              tips: '满72.0元赠送紫薯球1份',
              type: 106
            }
          ],
          address: '重庆市南岸区南坪街道珊瑚路2号5、6栋负1层3-1号',
          authentic_id: 4361148096085097,
          average_cost: '¥22/人',
          bidding: '{\'index\':4,\'target\':{\'restaurantId\':2130297,\'weight\':150,\'probability\':0.06360000371932983},\'come_from\':1,\'next\':{\'restaurantId\':1828255,\'weight\':150,\'probability\':0.04569999873638153}}',
          description: '',
          distance: 1375,
          favored: false,
          float_delivery_fee: 5,
          float_minimum_order_amount: 18,
          id: 2130297,
          image_path: '176986243095e800b8e27acfabb188afpng',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.52351,
          longitude: 106.568447,
          max_applied_quantity_per_order: -1,
          name: '奇世汉堡（南坪万达店）',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '00:00/24:00'
          ],
          order_lead_time: 37,
          phone: '02362483376 02381621166',
          piecewise_agent_fee: {
            description: '配送费¥5',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 5,
                price: 18
              }
            ],
            tips: '配送费¥5'
          },
          promotion_info: '欢迎光临，新店开业，用餐高峰期请提前下单，欢迎致电02381621166提本店不足之处，送鸡米花等小吃，谢谢！',
          rating: 4.6,
          rating_count: 768,
          recent_order_num: 1456,
          recommend: {
            image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
            reason: '广告',
            track: '{\'rankType\':\'8\'}'
          },
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'50\': {\'1\': 8, \'0\': 0}, \'100\': {\'1\': 15, \'0\': 0}, \'30\': {\'1\': 3, \'0\': 0}}',
              description: '满30减3，满50减8，满100减15',
              icon_color: 'f07373',
              icon_name: '减',
              id: 29642327,
              is_exclusive_with_food_activity: false,
              name: '满减优惠',
              tips: '满30减3，满50减8，满100减15',
              type: 102
            }
          ],
          address: '重庆市南岸区南坪街道福红路58号3区裙房负2层幸福美邻A04号商铺',
          authentic_id: 2391148081085808,
          description: '',
          distance: 2732,
          favored: false,
          float_delivery_fee: 10,
          float_minimum_order_amount: 38,
          id: 1523008,
          image_path: 'ca9952c3cd3295c97f6531f4eb1fe40djpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.537464,
          longitude: 106.573402,
          max_applied_quantity_per_order: -1,
          name: '甜心时光',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '07:00/22:00'
          ],
          order_lead_time: 35,
          phone: '13527396110',
          piecewise_agent_fee: {
            description: '配送费¥10',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 10,
                price: 38
              }
            ],
            tips: '配送费¥10'
          },
          promotion_info: '',
          rating: 4.7,
          rating_count: 0,
          recent_order_num: 56,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'48\': {\'1\': 5, \'0\': 0}, \'88\': {\'1\': 10, \'0\': 0}, \'100\': {\'1\': 15, \'0\': 0}}',
              description: '满48减5，满88减10，满100减15',
              icon_color: 'f07373',
              icon_name: '减',
              id: 33004294,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满48减5，满88减10，满100减15',
              type: 102
            },
            {
              description: '“千层低价，非吃不可”',
              icon_color: 'f07373',
              icon_name: '特',
              id: 33446927,
              name: '“千层低价，非吃不可”',
              tips: '“千层低价，非吃不可”'
            },
            {
              description: '7.5元下午茶',
              icon_color: 'f07373',
              icon_name: '特',
              id: 33446421,
              name: '7.5元下午茶',
              tips: '7.5元下午茶'
            },
            {
              description: '新品尝鲜',
              icon_color: 'f07373',
              icon_name: '特',
              id: 33161264,
              name: '新品尝鲜',
              tips: '新品尝鲜'
            }
          ],
          address: '重庆市南岸区南城大道1号7幢9-5号',
          authentic_id: 5321118077842105,
          average_cost: '¥27/人',
          description: '欢迎光临WE DO私房蛋糕店，本店使用动物淡奶油，动物黄油等健康食材制作产品。下单后现做，尽快配送，高峰期请提前下单！',
          distance: 1259,
          favored: false,
          float_delivery_fee: 5,
          float_minimum_order_amount: 10,
          id: 150854705,
          image_path: '5db3e067d1e51c7df88683a0a8a9d603png',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.523158,
          longitude: 106.570183,
          max_applied_quantity_per_order: -1,
          name: 'WE DO 私房蛋糕',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '10:00/22:30'
          ],
          order_lead_time: 45,
          phone: '17784267979',
          piecewise_agent_fee: {
            description: '配送费¥5',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 5,
                price: 10
              }
            ],
            tips: '配送费¥5'
          },
          promotion_info: '欢迎光临WE DO私房蛋糕店，本店使用动物淡奶油，动物黄油等健康食材制作产品。下单后现做，尽快配送，高峰期请提前下单。本店商品纯手工制作，大小、形状、重量略有偏差，请勿介怀！',
          rating: 4.6,
          rating_count: 0,
          recent_order_num: 145,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'50\': {\'1\': 9, \'0\': 0}, \'20\': {\'1\': 3, \'0\': 0}, \'30\': {\'1\': 5, \'0\': 0}}',
              description: '满20减3，满30减5，满50减9',
              icon_color: 'f07373',
              icon_name: '减',
              id: 31773426,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满20减3，满30减5，满50减9',
              type: 102
            }
          ],
          address: '重庆市南岸区江南大道28号协信星光时代广场LG3层H1-D02号',
          authentic_id: 3331128097997708,
          average_cost: '¥16/人',
          delivery_mode: {
            color: '2395FF',
            gradient: {
              rgb_from: '00AAFF',
              rgb_to: '0085FF'
            },
            id: 1,
            is_solid: true,
            text: '蜂鸟专送'
          },
          description: '叫外卖上饿了么！',
          distance: 1200,
          favored: false,
          float_delivery_fee: 3,
          float_minimum_order_amount: 20,
          id: 756508,
          image_path: 'c53b64cd807dbddd92ac9b361d958242jpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.523111,
          longitude: 106.571601,
          max_applied_quantity_per_order: -1,
          name: '漾漾好贡茶',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '10:00/21:00'
          ],
          order_lead_time: 39,
          phone: '02362920139',
          piecewise_agent_fee: {
            description: '配送费¥3',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 3,
                price: 20
              }
            ],
            tips: '配送费¥3'
          },
          promotion_info: '',
          rating: 5,
          rating_count: 0,
          recent_order_num: 51,
          regular_customer_count: 0,
          status: 1,
          supports: [
            {
              description: '已加入“外卖保”计划，食品安全有保障',
              icon_color: '999999',
              icon_name: '保',
              id: 7,
              name: '外卖保'
            },
            {
              description: '准时必达，超时秒赔',
              icon_color: '57A9FF',
              icon_name: '准',
              id: 9,
              name: '准时达'
            }
          ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'88\': {\'1\': 2, \'0\': 0}, \'128\': {\'1\': 5, \'0\': 0}, \'2\': {\'1\': 1, \'0\': 0}}',
              description: '满2减1，满88减2，满128减5',
              icon_color: 'f07373',
              icon_name: '减',
              id: 34765722,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满2减1，满88减2，满128减5',
              type: 102
            },
            {
              attribute: '{\'88.0\': {\'quantity\': 1, \'must_pay_online\': 1, \'name\': \'\\u68d2\\u68d2\\u51b0\'}, \'200.0\': {\'quantity\': 1, \'must_pay_online\': 1, \'name\': \'\\u591a\\u8089\\u690d\\u7269\'}, \'158.0\': {\'quantity\': 2, \'must_pay_online\': 1, \'name\': \'\\u5c0f\\u5e03\\u4e01\'}}',
              description: '满158.0元赠送小布丁2份，满200.0元赠送多肉植物1份，满88.0元赠送棒棒冰1份',
              icon_color: '3cc791',
              icon_name: '赠',
              id: 34766821,
              is_exclusive_with_food_activity: true,
              name: '满赠优惠',
              tips: '满158.0元赠送小布丁2份，满200.0元赠送多肉植物1份，满88.0元赠送棒棒冰1份',
              type: 106
            }
          ],
          address: '解放碑菜家石堡8号附4号',
          authentic_id: 6371158073190159,
          description: '嘟嘟冰淇淋雪糕，提供国内，提供国内外约20个品牌，近200个品种的冰淇淋，并且在不断的更新品种。与各大品牌直接合作，价格和品质都有保障。全程添加冰袋.保温袋.保温箱三重保温配送，保证到您手中的冰淇淋的品质!嘟嘟冰淇淋（SY.SW1N)为广大消费者提供省钱.便利.时尚购物体验!',
          distance: 4366,
          favored: false,
          float_delivery_fee: 5,
          float_minimum_order_amount: 68,
          id: 697759,
          image_path: '18add814b5d0611c72462231aed4973ajpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.551759,
          longitude: 106.568728,
          max_applied_quantity_per_order: -1,
          name: '嘟嘟冰淇淋雪糕',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '00:00/24:00'
          ],
          order_lead_time: 32,
          phone: '18523886551',
          piecewise_agent_fee: {
            description: '配送费¥5',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 5,
                price: 68
              }
            ],
            tips: '配送费¥5'
          },
          promotion_info: '嘟嘟冰淇淋雪糕，提供国内外约20个品牌，近200个品种的冰淇淋，并且在不断的更新品种。与各大品牌直接合作，价格和品质都有保障。全程添加冰袋.保温袋.保温箱三重保温配送，保证到您手中的冰淇淋的品★送货时间段★:上午10点-14点，晚上19点-20点，晚上20点的单子第二天优先送',
          rating: 4.8,
          rating_count: 0,
          recent_order_num: 55,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '20.0',
              description: '新用户下单立减20.0元',
              icon_color: '70bc46',
              icon_name: '新',
              id: 36195987,
              is_exclusive_with_food_activity: true,
              name: '新用户立减(不与其他活动共享)',
              tips: '新用户下单立减20.0元',
              type: 103
            },
            {
              description: '整箱啤酒8.8折',
              icon_color: 'f07373',
              icon_name: '折',
              id: 33378139,
              name: '整箱啤酒8.8折',
              tips: '整箱啤酒8.8折'
            },
            {
              description: '功能饮料 第二件五折',
              icon_color: 'f07373',
              icon_name: '折',
              id: 33377266,
              name: '功能饮料 第二件五折',
              tips: '功能饮料 第二件五折'
            }
          ],
          address: '重庆市南岸区白鹤路160号附3号',
          authentic_id: 5391188089748855,
          bidding: '{\'index\':9,\'target\':{\'restaurantId\':1828255,\'weight\':150,\'probability\':0.04569999873638153},\'come_from\':1,\'next\':{\'restaurantId\':1058704,\'weight\':80,\'probability\':0.06610000133514404}}',
          description: '',
          distance: 1463,
          favored: false,
          float_delivery_fee: 5,
          float_minimum_order_amount: 40,
          id: 1828255,
          image_path: 'bf83164fb69997e6703e9cfb126211fbjpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.51186,
          longitude: 106.560854,
          max_applied_quantity_per_order: -1,
          name: 'E点便利（71青龙路小学店）',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '08:00/23:30'
          ],
          order_lead_time: 37,
          phone: '023-62825001',
          piecewise_agent_fee: {
            description: '配送费¥5',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 5,
                price: 40
              }
            ],
            tips: '配送费¥5'
          },
          promotion_info: '精选商品3折起请点击右上角下拉选框【收藏商家】为了更方便的购物，请点击右上角下拉选框进行店内搜索',
          rating: 4.9,
          rating_count: 0,
          recent_order_num: 129,
          recommend: {
            image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
            reason: '广告',
            track: '{\'rankType\':\'8\'}'
          },
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'88\': {\'1\': 5, \'0\': 0}, \'138\': {\'1\': 10, \'0\': 0}, \'38\': {\'1\': 3, \'0\': 0}}',
              description: '满38减3，满88减5，满138减10',
              icon_color: 'f07373',
              icon_name: '减',
              id: 36126255,
              is_exclusive_with_food_activity: false,
              name: '满减优惠',
              tips: '满38减3，满88减5，满138减10',
              type: 102
            },
            {
              description: '周年特惠',
              icon_color: 'f07373',
              icon_name: '特',
              id: 36127199,
              name: '周年特惠',
              tips: '周年特惠'
            },
            {
              description: '超值3.88折',
              icon_color: 'f07373',
              icon_name: '特',
              id: 36126664,
              name: '超值3.88折',
              tips: '超值3.88折'
            }
          ],
          address: '珊瑚路6号1栋3-65',
          authentic_id: 2341148088438659,
          average_cost: '¥28/人',
          description: '[多汁小姐] 和 [大象蛋糕] 同为爱乐纷烘焙工作室旗下品牌，其中[多汁小姐]系列产品主要以甜品和饮品为主，用最优质的食材，做最惊喜的美味！',
          distance: 1594,
          favored: false,
          float_delivery_fee: 5,
          float_minimum_order_amount: 0,
          id: 156342359,
          image_path: 'd41efb4652a13543b5cd890bc234693bpng',
          is_new: true,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.525256,
          longitude: 106.567379,
          max_applied_quantity_per_order: -1,
          name: '多汁小姐甜品（南坪万达店）',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '09:00/21:00'
          ],
          order_lead_time: 22,
          phone: '18580366713',
          piecewise_agent_fee: {
            description: '配送费¥5',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 5,
                price: 0
              }
            ],
            tips: '配送费¥5'
          },
          promotion_info: '★下单必看★为保证最佳口感与新鲜度本店产品均为下单后现做--不接急单--★特殊需求请咨询客服！★客服电话：18580366713，15520088899（微信）',
          rating: 5,
          rating_count: 0,
          recent_order_num: 62,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'100\': {\'1\': 20, \'0\': 0}, \'20\': {\'1\': 5, \'0\': 0}, \'5\': {\'1\': 3, \'0\': 0}}',
              description: '满5减3，满20减5，满100减20',
              icon_color: 'f07373',
              icon_name: '减',
              id: 32247029,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满5减3，满20减5，满100减20',
              type: 102
            }
          ],
          address: '重庆市南岸区南坪东路18号N18LOFT小院10号楼',
          authentic_id: 5361118078830713,
          average_cost: '¥25/人',
          description: '小店制作糕点所用面粉均为美玫奶油均为进口安佳动物性奶油高成本低利润 只为给你带去更好的味蕾享受 同行请绕道 自重',
          distance: 1865,
          favored: false,
          float_delivery_fee: 10,
          float_minimum_order_amount: 30,
          id: 1414913,
          image_path: 'a42494258e8267b07acd612b128cfb2fjpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.5297148530481,
          longitude: 106.574424346374,
          max_applied_quantity_per_order: -1,
          name: '互遇foryou',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '09:00/23:30'
          ],
          order_lead_time: 0,
          phone: '13752928501',
          piecewise_agent_fee: {
            description: '配送费¥10',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 10,
                price: 30
              }
            ],
            tips: '配送费¥10'
          },
          promotion_info: '',
          rating: 4,
          rating_count: 0,
          recent_order_num: 20,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              description: '年中特价(限08:00-20:30)',
              icon_color: 'f1884f',
              icon_name: '特',
              id: 33360643,
              name: '年中特价',
              tips: '年中特价'
            }
          ],
          address: '重庆市南岸区兰花路68号1层2号',
          authentic_id: 1381138076640129,
          description: '',
          distance: 1455,
          favored: false,
          float_delivery_fee: 4,
          float_minimum_order_amount: 20,
          id: 1995129,
          image_path: 'e842716c0eaca9ae38506f5c6a5377a2jpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.503948,
          longitude: 106.565038,
          max_applied_quantity_per_order: -1,
          name: '可可烘焙',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '09:00/20:00'
          ],
          order_lead_time: 0,
          phone: '15730025959',
          piecewise_agent_fee: {
            description: '配送费¥4',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 4,
                price: 20
              }
            ],
            tips: '配送费¥4'
          },
          promotion_info: '店铺所有蛋糕都新鲜现做，请提前两小时下单。',
          rating: 5,
          rating_count: 0,
          recent_order_num: 32,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [ ],
          address: '重庆市南岸区南坪街道珊瑚路2号1栋10-2号',
          authentic_id: 1391188074758230,
          description: '欢迎光临本店，本店新开张，诚信经营，只赚信誉不赚钱，谢谢',
          distance: 1618,
          favored: false,
          float_delivery_fee: 5,
          float_minimum_order_amount: 30,
          id: 2377130,
          image_path: '1f2ff83728dd40573fb5c4727260d4dfjpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.525843,
          longitude: 106.568059,
          max_applied_quantity_per_order: -1,
          name: '小蛋壳创意蛋糕坊',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '00:00/24:00'
          ],
          order_lead_time: 0,
          phone: '17783080156',
          piecewise_agent_fee: {
            description: '配送费¥5',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 5,
                price: 30
              }
            ],
            tips: '配送费¥5'
          },
          promotion_info: '新店开张，欢迎过路的朋友到此歇歇；本店秉承诚信待客，一流的服务为宗旨；顾客至上，质量为跟本；钱来货到，效率第一；新店新开张；好店好生意；顾客顾到位！ ',
          rating: 5,
          rating_count: 0,
          recent_order_num: 6,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'58\': {\'1\': 8, \'0\': 0}, \'11\': {\'1\': 2, \'0\': 0}, \'22\': {\'1\': 4, \'0\': 0}}',
              description: '满11减2，满22减4，满58减8',
              icon_color: 'f07373',
              icon_name: '减',
              id: 32166082,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满11减2，满22减4，满58减8',
              type: 102
            },
            {
              attribute: '{\'1.0\': {\'quantity\': 1, \'must_pay_online\': 1, \'name\': \'\\u52a0\\u591a\\u5b9d\'}}',
              description: '满1.0元赠送加多宝1份',
              icon_color: '3cc791',
              icon_name: '赠',
              id: 34128859,
              is_exclusive_with_food_activity: true,
              name: '满赠优惠',
              tips: '满1.0元赠送加多宝1份',
              type: 106
            },
            {
              description: '618华宇集团联袂饿了么10万饮料大放送',
              icon_color: '3cc791',
              icon_name: '赠',
              id: 33284771,
              name: '618华宇集团联袂饿了么10万饮料大放送',
              tips: '618华宇集团联袂饿了么10万饮料大放送'
            },
            {
              description: '半价菜品',
              icon_color: 'f07373',
              icon_name: '特',
              id: 32166377,
              name: '半价菜品',
              tips: '半价菜品'
            }
          ],
          address: '重庆市南岸区江南大道南城大道8号',
          authentic_id: 3331108073430204,
          average_cost: '¥21/人',
          bidding: '{\'index\':14,\'target\':{\'restaurantId\':1058704,\'weight\':80,\'probability\':0.06610000133514404},\'come_from\':1,\'next\':{\'restaurantId\':143266104,\'weight\':150,\'probability\':0.033399999141693115}}',
          description: '',
          distance: 1403,
          favored: false,
          float_delivery_fee: 2.5,
          float_minimum_order_amount: 20,
          id: 1058704,
          image_path: '416f638eeb4c7d948353161fcb3dc97ajpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.524328,
          longitude: 106.569549,
          max_applied_quantity_per_order: -1,
          name: '外婆傢的味道',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '09:00/22:30'
          ],
          order_lead_time: 37,
          phone: '18996134349',
          piecewise_agent_fee: {
            description: '配送费¥2.5',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 2.5,
                price: 20
              }
            ],
            tips: '配送费¥2.5'
          },
          promotion_info: '',
          rating: 4.6,
          rating_count: 0,
          recent_order_num: 419,
          recommend: {
            image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
            reason: '广告',
            track: '{\'rankType\':\'8\'}'
          },
          regular_customer_count: 0,
          status: 1,
          supports: [
            {
              description: '已加入“外卖保”计划，食品安全有保障',
              icon_color: '999999',
              icon_name: '保',
              id: 7,
              name: '外卖保'
            },
            {
              description: '该商家支持开发票，请在下单时填写好发票抬头',
              icon_color: '999999',
              icon_name: '票',
              id: 4,
              name: '开发票'
            }
          ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'50\': {\'1\': 5, \'0\': 0}}',
              description: '满50减5',
              icon_color: 'f07373',
              icon_name: '减',
              id: 34094583,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满50减5',
              type: 102
            }
          ],
          address: '重庆市南岸区江南大道28号1层商业（B1层d04d6号',
          authentic_id: 7321118090122874,
          average_cost: '¥12/人',
          delivery_mode: {
            color: '2395FF',
            gradient: {
              rgb_from: '00AAFF',
              rgb_to: '0085FF'
            },
            id: 1,
            is_solid: true,
            text: '蜂鸟专送'
          },
          description: '',
          distance: 1325,
          favored: false,
          float_delivery_fee: 3,
          float_minimum_order_amount: 20,
          id: 2012274,
          image_path: '2f65e4fe9e4d1e66abbf6dee9ea376cdjpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.52427,
          longitude: 106.57148,
          max_applied_quantity_per_order: -1,
          name: '糖果大师（协信星光店）',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '10:00/22:00'
          ],
          order_lead_time: 0,
          phone: '15823072114 023-68590013',
          piecewise_agent_fee: {
            description: '配送费¥3',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 3,
                price: 20
              }
            ],
            tips: '配送费¥3'
          },
          promotion_info: '',
          rating: 4,
          rating_count: 0,
          recent_order_num: 0,
          regular_customer_count: 0,
          status: 1,
          supports: [
            {
              description: '已加入“外卖保”计划，食品安全有保障',
              icon_color: '999999',
              icon_name: '保',
              id: 7,
              name: '外卖保'
            },
            {
              description: '准时必达，超时秒赔',
              icon_color: '57A9FF',
              icon_name: '准',
              id: 9,
              name: '准时达'
            }
          ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '18.0',
              description: '新用户下单立减18.0元',
              icon_color: '70bc46',
              icon_name: '新',
              id: 31638913,
              is_exclusive_with_food_activity: true,
              name: '新用户立减(不与其他活动共享)',
              tips: '新用户下单立减18.0元',
              type: 103
            }
          ],
          address: '白鹤路130附51号',
          authentic_id: 8391178077938004,
          description: '',
          distance: 1296,
          favored: false,
          float_delivery_fee: 3,
          float_minimum_order_amount: 20,
          id: 2186304,
          image_path: 'b169aacf2a53efbc5d2bcb3620468af7png',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.51428,
          longitude: 106.562599,
          max_applied_quantity_per_order: -1,
          name: '果然.优鲜',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '10:00/20:00'
          ],
          order_lead_time: 0,
          phone: '13983191930',
          piecewise_agent_fee: {
            description: '配送费¥3',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 3,
                price: 20
              }
            ],
            tips: '配送费¥3'
          },
          promotion_info: '',
          rating: 0,
          rating_count: 0,
          recent_order_num: 0,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '17.0',
              description: '新用户下单立减17.0元',
              icon_color: '70bc46',
              icon_name: '新',
              id: 36196247,
              is_exclusive_with_food_activity: true,
              name: '新用户立减(不与其他活动共享)',
              tips: '新用户下单立减17.0元',
              type: 103
            },
            {
              attribute: '{\'210\': {\'1\': 25, \'0\': 0}, \'100\': {\'1\': 15, \'0\': 0}, \'150\': {\'1\': 20, \'0\': 0}, \'30\': {\'1\': 8, \'0\': 0}}',
              description: '满30减8，满100减15，满150减20，满210减25',
              icon_color: 'f07373',
              icon_name: '减',
              id: 35552939,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满30减8，满100减15，满150减20，满210减25',
              type: 102
            }
          ],
          address: '重庆市南岸区白鹤路139号21幢负3层商业用房1号',
          authentic_id: 6331158096035904,
          average_cost: '¥27/人',
          bidding: '{\'index\':17,\'target\':{\'restaurantId\':143266104,\'weight\':150,\'probability\':0.033399999141693115},\'come_from\':1,\'next\':{\'restaurantId\':1138656,\'weight\':80,\'probability\':0.061000000685453415}}',
          closing_count_down: 0,
          description: '',
          distance: 1228,
          favored: false,
          float_delivery_fee: 6,
          float_minimum_order_amount: 20,
          id: 143266104,
          image_path: '8dc3c8a5e1b52b354c73cb58f3d6d69cjpeg',
          is_new: false,
          is_premium: false,
          is_stock_empty: 0,
          latitude: 29.515413,
          longitude: 106.563537,
          max_applied_quantity_per_order: -1,
          name: '林中乐辣子鸡(南坪店)',
          next_business_time: '16:30',
          only_use_poi: false,
          opening_hours: [
            '10:00/14:30',
            '16:30/21:00'
          ],
          order_lead_time: 43,
          phone: '02362970190',
          piecewise_agent_fee: {
            description: '配送费¥6',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 6,
                price: 20
              }
            ],
            tips: '配送费¥6'
          },
          promotion_info: '最正宗的重庆味。真正意义上重庆辣子鸡鼻祖，歌乐山三百梯林中乐辣子鸡直营店（非旗舰店）。',
          rating: 4.8,
          rating_count: 0,
          recent_order_num: 146,
          recommend: {
            image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
            reason: '广告',
            track: '{\'rankType\':\'8\'}'
          },
          regular_customer_count: 0,
          status: 5,
          supports: [
            {
              description: '该商家支持开发票，开票订单金额100.0元起，请在下单时填写好发票抬头',
              icon_color: '999999',
              icon_name: '票',
              id: 4,
              name: '开发票'
            }
          ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '{\'25\': {\'1\': 12, \'0\': 0}, \'50\': {\'1\': 25, \'0\': 0}}',
              description: '满25减12，满50减25',
              icon_color: 'f07373',
              icon_name: '减',
              id: 36066614,
              is_exclusive_with_food_activity: true,
              name: '满减优惠',
              tips: '满25减12，满50减25',
              type: 102
            },
            {
              description: '立减20元！饿了就要！双人餐！',
              icon_color: 'f07373',
              icon_name: '秒',
              id: 36168919,
              name: '立减20元！饿了就要！双人餐！',
              tips: '立减20元！饿了就要！双人餐！'
            },
            {
              description: '下单立减6元！饿了就要！单人餐！',
              icon_color: 'f07373',
              icon_name: '减',
              id: 36165137,
              name: '下单立减6元！饿了就要！单人餐！',
              tips: '下单立减6元！饿了就要！单人餐！'
            },
            {
              description: '立省8元！饿了就要！吃定！',
              icon_color: 'f1884f',
              icon_name: '惠',
              id: 36163367,
              name: '立省8元！饿了就要！吃定！',
              tips: '立省8元！饿了就要！吃定！'
            },
            {
              description: '立省8元！饿了就要！更优惠！',
              icon_color: 'f1884f',
              icon_name: '特',
              id: 36158633,
              name: '立省8元！饿了就要！更优惠！',
              tips: '立省8元！饿了就要！更优惠！'
            },
            {
              description: '5折！新品大促销只需13元！',
              icon_color: 'f07373',
              icon_name: '折',
              id: 36156727,
              name: '5折！新品大促销只需13元！',
              tips: '5折！新品大促销只需13元！'
            },
            {
              description: '够',
              icon_color: 'f1884f',
              icon_name: '造',
              id: 31126333,
              name: '够',
              tips: '够'
            },
            {
              description: '个',
              icon_color: 'f1884f',
              icon_name: '打',
              id: 31126134,
              name: '个',
              tips: '个'
            },
            {
              description: '吃',
              icon_color: 'f1884f',
              icon_name: '合',
              id: 31125893,
              name: '吃',
              tips: '吃'
            },
            {
              description: '次',
              icon_color: 'f1884f',
              icon_name: '联',
              id: 31125377,
              name: '次',
              tips: '次'
            },
            {
              description: '一',
              icon_color: 'f1884f',
              icon_name: '士',
              id: 31125193,
              name: '一',
              tips: '一'
            },
            {
              description: '你',
              icon_color: 'f1884f',
              icon_name: '莱',
              id: 31124936,
              name: '你',
              tips: '你'
            },
            {
              description: '让',
              icon_color: 'f1884f',
              icon_name: '华',
              id: 31124671,
              name: '让',
              tips: '让'
            },
            {
              description: '餐',
              icon_color: 'f1884f',
              icon_name: '和',
              id: 31124265,
              name: '餐',
              tips: '餐'
            },
            {
              description: '大',
              icon_color: 'f1884f',
              icon_name: '么',
              id: 31124036,
              name: '大',
              tips: '大'
            },
            {
              description: '值',
              icon_color: 'f1884f',
              icon_name: '了',
              id: 31123853,
              name: '值',
              tips: '值'
            },
            {
              description: '超',
              icon_color: 'f1884f',
              icon_name: '饿',
              id: 31123594,
              name: '超',
              tips: '超'
            }
          ],
          address: '重庆市南岸区工商大学教师广厦工程项目C区一层2号',
          authentic_id: 7341118096394138,
          average_cost: '¥18/人',
          description: '',
          distance: 883,
          favored: false,
          float_delivery_fee: 1,
          float_minimum_order_amount: 40,
          id: 1476438,
          image_path: '9481288038262e90cbb61665a25ef148png',
          is_new: false,
          is_premium: true,
          is_stock_empty: 0,
          latitude: 29.50551,
          longitude: 106.57284,
          max_applied_quantity_per_order: -1,
          name: '华莱士（工商大学店）',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '10:00/22:00'
          ],
          order_lead_time: 59,
          phone: '02362935341 13627600109',
          piecewise_agent_fee: {
            description: '配送费¥1',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 1,
                price: 40
              }
            ],
            tips: '配送费¥1'
          },
          promotion_info: '',
          rating: 4.3,
          rating_count: 0,
          recent_order_num: 1997,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        },
        {
          activities: [
            {
              attribute: '17.0',
              description: '新用户下单立减17.0元',
              icon_color: '70bc46',
              icon_name: '新',
              id: 31412143,
              is_exclusive_with_food_activity: true,
              name: '新用户立减(不与其他活动共享)',
              tips: '新用户下单立减17.0元',
              type: 103
            },
            {
              description: '买欢乐桶赠送鸡排大亨1份',
              icon_color: '3cc791',
              icon_name: '赠',
              id: 32682434,
              name: '买欢乐桶赠送鸡排大亨1份',
              tips: '买欢乐桶赠送鸡排大亨1份'
            },
            {
              description: '鸡排大亨10元秒杀!',
              icon_color: 'f1884f',
              icon_name: '抢',
              id: 32681531,
              name: '鸡排大亨10元秒杀!',
              tips: '鸡排大亨10元秒杀!'
            },
            {
              description: '脆皮炸鸡特价10元抢购！',
              icon_color: 'f1884f',
              icon_name: '特',
              id: 32680853,
              name: '脆皮炸鸡特价10元抢购！',
              tips: '脆皮炸鸡特价10元抢购！'
            }
          ],
          address: '重庆市南岸区海棠溪四公里立交旁（四公里交通换乘大厅靠近轻轨扶梯处2号门面）',
          authentic_id: 6381168081804024,
          average_cost: '¥28/人',
          description: '',
          distance: 1134,
          favored: false,
          float_delivery_fee: 6,
          float_minimum_order_amount: 20,
          id: 2190424,
          image_path: 'b09ae95b7fd1eb49719c98b578db2276jpeg',
          is_new: false,
          is_premium: true,
          is_stock_empty: 0,
          latitude: 29.52319,
          longitude: 106.5761,
          max_applied_quantity_per_order: -1,
          name: '德克士（四公里店）',
          next_business_time: '',
          only_use_poi: false,
          opening_hours: [
            '08:00/19:30'
          ],
          order_lead_time: 56,
          phone: '13101238252',
          piecewise_agent_fee: {
            description: '配送费¥6',
            extra_fee: 0,
            is_extra: false,
            rules: [
              {
                fee: 6,
                price: 20
              }
            ],
            tips: '配送费¥6'
          },
          promotion_info: '工商大学的同学，如有需要订餐的可以提前预定，也可以加我们群13368138906',
          rating: 4.6,
          rating_count: 0,
          recent_order_num: 762,
          regular_customer_count: 0,
          status: 1,
          supports: [ ],
          type: 0
        }
      ]
    };
  },
  mounted () {
    // 从本地存储获取当前选择的地址
    this.choosedAdressTxt = localStorage.choosedAdress;
  },
  methods: {
    // 返回选择地址
    goWelcome () {
      // 清楚本地存储的地址
      localStorage.choosedAdress = '';
      // 回到选择地址
      this.$router.push('/welcome');
    }
  }
};
</script>

<style lang="less">
@import '../../less/style.less';
.home_cont_nav{
  display: flex;justify-content: space-between;height: 100px;padding-top: 10px;position: relative;
}
.home_cont_nav::after{
  content: '';width: 186px;height: 55px;display: block;background: url('../../assets/images/takeout.png') no-repeat center;background-size: cover;position: absolute;bottom: -6px;right: 0;
}
.address{
  font-size: 14px;line-height: 32px;
}
.address span{
  color: @baseLightColor;margin-right: 10px;
}
.address a{
  color: @baseColor;
}
.store_list{
  display: flex;flex-wrap: wrap;background-color: #fff;border: 1px solid @baseBorderColor;margin-top:20px;
}
</style>
