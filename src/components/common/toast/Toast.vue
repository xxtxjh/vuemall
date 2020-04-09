<template>
  <div class="Toast">
    <div class="toast-show" v-show="isToastShow">{{message}}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      isToastShow: false,
      message: ""
    };
  },
  methods: {
    shows(message = "添加成功", duration = 1500) {
      this.message = message;
      this.isToastShow = true;
      setTimeout(() => {
        this.message = "";
        this.isToastShow = false;
      }, 1500);
    }
  }
};
</script>
<style lang="scss" scoped>
.toast-show {
  position: fixed;
  padding: 10px 12px;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 999;
  border-radius: 3px;
  color: #fff;
  text-align: center;
}
</style>