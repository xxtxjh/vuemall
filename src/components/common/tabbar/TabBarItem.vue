<template>
  <div class="tab-bar-item" @click="clickSkip">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "deepblue",
       required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    clickSkip() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
  cursor: pointer;
  img {
    width: 22px;
    height: 22px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
}
</style>