<template>
  <div class="tabControl">
    <div
      class="tab-control-item"
      v-for="(item,index) in titles"
      :key="item"
      @click="itemClick(index)"
    >
      <span :class="{active:index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabControl {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  .tab-control-item {
    flex: 1;
    span {
      padding: 8px;
    }
  }
  .active {
    padding-bottom: 6px;
    border-bottom: 3px solid red;
  }
}
</style>
