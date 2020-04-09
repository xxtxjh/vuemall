<template>
  <div class="cart">
    <nav-bar class="homeStyle">
      <slot slot="center">购物车({{length}})</slot>
    </nav-bar>
      <cart-list class="car-list"></cart-list>
      <tips v-show="tipsShow"></tips>
    <BottomBar/>
  </div>
</template>
<script>
import CartList from "./childComps/CartList";
import BottomBar from "./childComps/BottomBar";
import Tips from "./childComps/Tips";

import NavBar from "components/common/navbar/NavBar";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar,
    Tips
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapGetters({
      length: "cartListLength"
    }),
    tipsShow() {
      return this.$store.getters.cartListLength > 0 ? !this.show : this.show;
    }
  }
};
</script>
<style lang="scss" scoped>
.cart {
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
.homeStyle {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 888;
  background-color: #eee;
  color: black;
}
.car-list {
  position: absolute;
  top: 44px;
  bottom:55px;
  width: 100%;
}
</style>