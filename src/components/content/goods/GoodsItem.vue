<template>
  <div class="goods">
    <img v-lazy="showImages"  @load="imagesLoad" @click="itemClick" >
    <div class="content">
      <p>{{product.title}}</p>
      <span class="price">{{product.price}}</span>
      <span class="icon">{{product.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsItem",
  props: {
   product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed:{
    showImages(){
      return  this.product.img || this.product.image || this.product.show.img;
    }
  },
  methods:{
    imagesLoad(){
      this.$bus.$emit('itemImageLoad');
      
    },
    itemClick(){
     this.$router.push("/detail/"+this.product.iid)
      
    }
  }
};
</script>
<style lang="scss" scoped>
.goods{
    padding-bottom: 45px;
    position: relative;
    width:49%;
    justify-content:space-around;
    padding-left:8px;
  }
  img {
    width: 100%;
    height:100%;
  }

  .content {
    font-size: 12px;
    position: absolute;
    bottom:3px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
     p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    padding-left: 8px;
  }
    .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
   .icon {
    position: relative;
  }
    .icon::before {
    content: '';
     width: 14px;
    height: 14px;
    position: absolute;
    top: 0;
    left: -15px;
    right:5px;
  
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }
  }








</style>
