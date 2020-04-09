<template>
  <div class="detailSwiper">
    <swiper class="swipers">
      <swiper-item v-for="item in  topImages" :key="item">
        <a :href="item">
          <img :src="item" alt  />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
   topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
 created(){

 }
};
</script>
<style lang="scss" scoped>
.swipers{
    height: 280px;
    overflow: hidden;
}
</style>
