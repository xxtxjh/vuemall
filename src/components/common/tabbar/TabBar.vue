<template>
  <div id="tab-bar">
  <slot></slot>
  </div>
</template>
<script>
export default {
name: "TabBar",
}
</script>
<style lang="scss" scoped>
#tab-bar {
  width: 100%;
  height: 49px;
  background-color: #f6f6f6;
  display: flex;
  text-align: center;
  position:fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #eee;
  box-shadow: 1px 3px 3px #fff;
}
</style>