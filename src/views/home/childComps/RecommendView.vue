<template>
  <div class="recommendView">
    <div class="recommend-item" v-for="item in recommend" :key="item.link">
     <a :href="item.link">
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
      </a>
    </div>
 </div>
</template>
<script>
export default {
  name: "RecommendView",
  props:{
  recommend:{
    type:Array,
    default(){
     return []
    }
  }
},
};
</script>
<style lang="scss" scoped>
.recommendView{
  width:100%;
  display: flex;
  text-align: center;
  font-size: 14px;
  padding:15px 0 30px;
  border-bottom: 10px solid #eee;
  .recommend-item{
    flex: 1;
  }
   .recommend-item img{
     width:80px;
     height:80px;
     margin-bottom: 3px;
  
   }
}
</style>
