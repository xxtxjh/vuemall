<template>
  <div class="goodsList">
   <goods-item  v-for="item in goods" :product="item" :key="item.img"></goods-item>
  </div>
</template>
<script>
import GoodsItem from 'components/content/goods/GoodsItem.vue'
export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    GoodsItem 
  }
};
</script>
<style lang="scss" scoped>
.goodsList{
  display:flex;
  flex-wrap: wrap;
  margin-top: 3px;
}
</style>
