import { debouce } from './utils';
import BackTop from "components/content/backtop/BackTop.vue";
import {POP, NEW, SELL} from "./const";
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
export const itemListernerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh:null
    }
  },
  mounted() {
   this.newRefresh = debouce(this.$refs.scroll.refresh, 150);
    this.itemImgListener = () => {
    this.newRefresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
}
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTopShow: false
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
  }
}