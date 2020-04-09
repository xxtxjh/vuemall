<template>
  <div class="detailNavBar">
    <nav-bar class="navBar">
      <div slot="left" @click="goBack">
        返回
      </div>
      <div slot="center" class="titles">
        <div
          class="navItem"
          v-for="(item,index) in titles"
          :key="item"
          @click="itemClick(index)"
          :class="{active:currentIndex === index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    }
  },
  created() {
    this.iid = this.$route.params.iid;
  }
};
</script>
<style lang="scss" scoped>
.navBar {
  box-shadow: 0px 1px 0px #e5e5e5;
  .titles {
    display: flex;
    .navItem {
      flex: 1;
      font-size: 14px;
    }
    .active {
      color: red;
    }
  }
  img {
    margin-top: 8px;
  }
}
</style>
