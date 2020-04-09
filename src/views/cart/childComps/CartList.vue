<template>
  <div class="cartList">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :cartList="item"></cart-list-item>
    </scroll>
  </div>
</template>
<script>
import CartListItem from "./CartListItem";

import Scroll from "components/content/scroll/Scroll";

import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>
<style lang="scss" scoped>
.cartList {
  height: calc(100% - 44px - 105px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>